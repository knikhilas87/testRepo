using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;

namespace WebAPPI.Models
{
    public class NBApplicationModel
    {
        [Key]
        public int ApplicationID { get; set; }
        [Required]
        public string PartnerName { get; set; }
        [Required]
        public int NoOfInsured { get; set; }
        public int NoOfSeniorInsured { get; set; }
        public int Revenue { get; set; }
        public string Year { get; set; }
        public DateTime SubmittedDate { get; set; }
         public string ListType { get; set; }

       
    }
}