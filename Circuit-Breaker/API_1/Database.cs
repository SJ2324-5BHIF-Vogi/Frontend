using Microsoft.EntityFrameworkCore;
using System.Numerics;

namespace ShoppingCartAPI;

public class ShoppingCart
{
    public int Id { get; init; }
}

public class DatabaseContext : DbContext
{
    public DbSet<ShoppingCart> ShoppingCarts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=shoppingcarts.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ShoppingCart>().HasKey(e => e.Id);
    }
}
