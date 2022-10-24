using api.Interfaces;
using api.Models;
using MySql.Data.MySqlClient;

namespace api.Behaviors
{
    public class DeleteBehavior : IFireDriver
    {
        public void FireDriver(Driver driver)
        {
            string cs = @"server=localhost;user=root;database=PA3;port=3306;password=panthers57";
            using var connection = new MySqlConnection(cs);
            connection.Open();

            string stm = "UPDATE Drivers";
            using var cmd = new MySqlCommand(stm, connection);

            cmd.CommandText = @"UPDATE Drivers SET isFired=@isFired WHERE driverID = @driverID";

            cmd.Parameters.AddWithValue("@driverID", driver.ID); 
            cmd.Parameters.AddWithValue("@isFired", driver.Deleted);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}