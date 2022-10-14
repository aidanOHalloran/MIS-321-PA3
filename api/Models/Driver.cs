using System.Runtime.InteropServices;    


namespace api.Models

{
    public class Driver
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public string DateHired { get; set; }
        public bool Deleted { get; set; }
    
        public override string ToString(){
            return "Driver:" + Name + " ID: " + ID + " Rating: " + Rating + "Hire Date: " + DateHired + " Been Fired: " + Deleted;
        }

        public Driver MakeNewDriver(string Name, int Rating, string DateHired, bool Deleted){
            Driver newDriver = new Driver();
            newDriver.ID = Guid.NewGuid();
            newDriver.Name = Name;
            newDriver.Rating = Rating;
            newDriver.DateHired = DateHired;
            newDriver.Deleted = Deleted;

           return newDriver;
        }
    }
}