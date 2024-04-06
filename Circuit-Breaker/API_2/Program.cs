using Microsoft.EntityFrameworkCore;
using PaymentAPI;
using System.Text.Json;
using Polly;
using Polly.CircuitBreaker;
using Polly.Extensions.Http;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DatabaseContext>();

builder.Services.AddHttpClient("ShoppingCartAPI")
    .AddPolicyHandler(GetCircuitBreakerPolicy());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

DatabaseContext db = new();
db.Database.EnsureCreated();

static IAsyncPolicy<HttpResponseMessage> GetCircuitBreakerPolicy()
{
    return HttpPolicyExtensions
        .HandleTransientHttpError()
        .CircuitBreakerAsync(3, TimeSpan.FromSeconds(30));
}

app.MapGet("/payments", async context =>
{
    using var scope = app.Services.CreateScope();
    var services = scope.ServiceProvider;
    var dbContext = services.GetRequiredService<DatabaseContext>();

    var payments = await dbContext.Payments.ToListAsync();

    var json = JsonSerializer.Serialize(payments);
    context.Response.ContentType = "application/json";
    await context.Response.WriteAsync(json);
});

app.MapGet("/shoppingcarts", async context =>
{
    var shoppingcartApiUrl = "https://localhost:7215/shoppingcarts";
    var httpClientFactory = app.Services.GetRequiredService<IHttpClientFactory>();
    var httpClient = httpClientFactory.CreateClient("ShoppingCartAPI");

    try
    {
        var response = await httpClient.GetAsync(shoppingcartApiUrl);

        if (response.IsSuccessStatusCode)
        {
            var responseContent = await response.Content.ReadAsStringAsync();
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(responseContent);
        }
        else
        {
            context.Response.StatusCode = (int)response.StatusCode;
            await context.Response.WriteAsync($"Failed to fetch payment information: {response.ReasonPhrase}");
        }
    }
    catch (BrokenCircuitException)
    {
        context.Response.StatusCode = 503;
        await context.Response.WriteAsync("This service is currently anavailable. Please try again later.");
    }
    catch (Exception ex)
    {
        context.Response.StatusCode = 500;
        await context.Response.WriteAsync($"An error occurred: {ex.Message}");
    }
});

app.MapControllers();

app.Run();
