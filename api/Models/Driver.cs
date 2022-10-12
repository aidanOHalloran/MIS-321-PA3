namespace api.Models
{
    public class Driver
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public DateTime DateHired { get; set; }
        public bool Deleted { get; set; }
    
        public override string ToString(){
            return "Driver:" + Name + " ID: " + ID + " Rating: " + Rating + "Hire Date: " + DateHired + " Been Fired: " + Deleted;
        }
    }
}