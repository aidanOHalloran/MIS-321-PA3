using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.Interfaces;
using api.Behaviors;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PA3Controller : ControllerBase
    {
        public List<Driver> drivers = new List<Driver>();

        // GET: api/PA3
        [HttpGet]
        public List<Driver> Get()
        {
            IGetAllDrivers readObject = new ReadBehavior();
            return readObject.GetAllDrivers();
        }

        // GET: api/PA3/5
        [HttpGet("{id}", Name = "Get")]
        public Driver Get(int id)
        {
            IGetDriver readObject = new ReadBehavior(); 
            return readObject.GetDriver(id);
        }

        // POST: api/PA3
        [HttpPost]
        public void Post([FromBody] Driver newDriver)
        {
            IInsertDriver insertObject = new CreateBehavior();
            insertObject.InsertDriver(newDriver);
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
