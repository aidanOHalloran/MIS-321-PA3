using api.Interfaces;
using api.Models;

namespace api
{
    public class ReadDriverData
    {   
       public List<Driver> GetAllDrivers(){
           return new List<Driver>();
       }

       public Driver GetDriver(){
           return new Driver();
       }

    }   
    
}