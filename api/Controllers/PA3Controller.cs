using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Interfaces;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PA3Controller : ControllerBase
    {
        // GET: api/PA3
        [HttpGet]
        public List<Driver> Get()
        {
            //return new string[] { "value1", "value2" };
            // var db = new DriversDB();
            List<Driver> drivers = new List<Driver>();
            Driver newDriver = new Driver();
            string now = DateTime.Now.ToString("MM/dd/yyyy");
            
            newDriver = newDriver.MakeNewDriver("Aidan", 4, now, false);
            drivers.Add(newDriver);
            
            newDriver = newDriver.MakeNewDriver("Bailey", 2, now, false);
            drivers.Add(newDriver);
            
            newDriver = newDriver.MakeNewDriver("Jake", 5, now, false);
            drivers.Add(newDriver);

            newDriver = newDriver.MakeNewDriver("Ryan", 4, now, false);
            drivers.Add(newDriver);

            // db.Drivers?.AddRange(drivers);
            //db.SaveChanges();
            return drivers;
        }

        // GET: api/PA3/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/PA3
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/PA3/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/PA3/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
