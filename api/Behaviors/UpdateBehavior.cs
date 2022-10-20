using api.Interfaces;
using api.Models;
using MySql.Data.MySqlClient;

namespace api.Behaviors
{
    public class UpdateBehavior : IFireDriver
    {
        public void FireDriver(Driver driver){

            string cs = @"server=localhost;user=root;database=PA3;port=3306;password=panthers57";
            using var connection = new MySqlConnection(cs);
            connection.Open();

            string stm = "UPDATE Drivers";
            using var cmd = new MySqlCommand(stm, connection);

            cmd.CommandText = @"UPDATE Drivers SET driverRating=@driverRating WHERE driverID = @driverID";

            cmd.Parameters.AddWithValue("@driverID", driver.ID); 

            cmd.Parameters.AddWithValue("@driverRating", driver.Rating);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
            System.Console.WriteLine($"driver rating: {driver.Rating} driver id: {driver.ID}");

        }
    }
}