using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using WebAPPI.Models;
using System.Data.Entity;
namespace WebAPPI.Controllers
{
    [RoutePrefix("api/NBDetails")]
    [Authorize]
    public class NBDetailsController : ApiController
    {
        // POST api/NBDetails/OnSaveApplication
        [AllowAnonymous]
        [HttpPost]
        public NBApplicationModel OnSaveApplication(NBApplicationModel model)
        {
            using (NBDetailsDBContext context = new NBDetailsDBContext())
            {
                var details = new NBApplicationModel()
                {
                    PartnerName = model.PartnerName,
                    NoOfInsured = model.NoOfInsured,
                    NoOfSeniorInsured = model.NoOfSeniorInsured,
                    Revenue = model.Revenue,
                    Year = model.Year,
                    ListType = model.ListType,
                    SubmittedDate = DateTime.Now
                };
                context.NBApplication.Add(details);
                context.SaveChanges();
                return details;
            };

           
        }

        //// api/NBDetails/GetApplicationDetails
        //[HttpGet]
        
        //public List<NBApplicationModel> GetApplicationDetails()
        //{
        //    NBDetailsDBContext nbDetailsDBContext = new NBDetailsDBContext();
        //    return nbDetailsDBContext.NBApplication.ToList();
        //}
        [HttpGet]
       
        public bool GETIsEligile(int Id)
        {
            NBDetailsDBContext nbDetailsDBContext = new NBDetailsDBContext();
            IEnumerable<NBApplicationModel> nbDetails = nbDetailsDBContext.NBApplication.ToList();
            bool eligible = false;

            eligible = nbDetails.Any(nb => nb.ApplicationID == Id && nb.ListType == "Eligible"); //(from nb in nbDetails
                       //where nb.ApplicationID == Id && nb.ListType == "Eligible" select nb.ListType);
                  
            return eligible;
        }

        [HttpGet]
        
        public IEnumerable<NBApplicationModel> GetApplicationDetails(string listType, DateTime fromDate, DateTime toDate)
        {
            NBDetailsDBContext nbDetailsDBContext = new NBDetailsDBContext();
            IEnumerable<NBApplicationModel> nbDetails= nbDetailsDBContext.NBApplication.ToList();

            if (listType == "All")
            {
                nbDetails = from nb in nbDetails
                            where nb.SubmittedDate >= fromDate && nb.SubmittedDate <= toDate
                            select nb;
            }else 
            {
                nbDetails = from nb in nbDetails
                            where (nb.SubmittedDate >= fromDate && nb.SubmittedDate <= toDate) && nb.ListType == listType
                            select nb;
            }
            return nbDetails;
        }
    }
}
