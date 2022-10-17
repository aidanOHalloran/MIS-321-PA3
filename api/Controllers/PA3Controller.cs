using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Interfaces;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PA3Controller : ControllerBase
    {
        public List<Driver> drivers = new List<Driver>();

        // GET: api/PA3
        //[EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Driver> Get()
        {
            //return new string[] { "value1", "value2" };
            // var db = new DriversDB();
            
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
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/PA3
        //[EnableCors("OpenPolicy")]        
        [HttpPost]
        public void Post([FromBody] Driver newDriver)
        {
            drivers.Add(newDriver);
            System.Console.WriteLine("Hit the post");
        }

        // PUT: api/PA3/5
       // [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/PA3/5
        //[EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
