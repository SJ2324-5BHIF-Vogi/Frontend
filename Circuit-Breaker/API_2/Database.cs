using Microsoft.EntityFrameworkCore;
using System.Numerics;

namespace PaymentAPI;

public class Payment
{
    public int Id { get; init; }
}

public class DatabaseContext : DbContext
{
    public DbSet<Payment> Payments { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=payments.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Payment>().HasKey(e => e.Id);
    }
}
