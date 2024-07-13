using Microsoft.EntityFrameworkCore;
using TestASP;

namespace TestingASP
{
    public class ContextDB : DbContext
    {
        public ContextDB(DbContextOptions<ContextDB> options) : base(options) { }
        public DbSet<WishItem> Wishes { set; get; }
    }
}
