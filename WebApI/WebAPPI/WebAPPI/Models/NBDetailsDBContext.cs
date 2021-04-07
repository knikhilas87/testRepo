using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebAPPI.Models
{
    public class NBDetailsDBContext : ApplicationDbContext
    {
        //public NBDetailsDBContext()
        //   : base("NBDetailsDBContext")
        //{
        //}
        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
           
       
        //}
        public DbSet<NBApplicationModel> NBApplication { get; set; }
    
    }
}