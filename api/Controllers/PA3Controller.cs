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
            List<Driver> drivers = new List<Driver>();
            Driver newDriver = new Driver();
            drivers.Add(newDriver.MakeNewDriver("Aidan", 5, DateTime.Now, false));
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
