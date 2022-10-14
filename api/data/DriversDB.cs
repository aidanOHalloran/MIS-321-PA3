using api.Models;
using Microsoft.EntityFrameworkCore;

    public class DriversDB : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=PA3;Trusted_Connection=True");
        }
        public DbSet<Driver>? Drivers { get; set; }
    }
