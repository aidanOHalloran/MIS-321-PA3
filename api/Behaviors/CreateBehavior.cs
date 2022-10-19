using api.Interfaces;
using api.Models;
using MySql.Data.MySqlClient;

namespace api.Behaviors
{
    public class CreateBehavior : IInsertDriver
    {
        public void InsertDriver(Driver driver){
            string cs = @"server=localhost;user=root;database=PA3;port=3306;password=panthers57";
            using var connection = new MySqlConnection(cs);
            connection.Open();

            string stm = "INSERT INTO Drivers";
            using var cmd = new MySqlCommand(stm, connection);

            cmd.CommandText = @"INSERT INTO Drivers(driverID, driverName, driverRating, dateHired, isFired) VALUES(@driverID, @driverName, @driverRating, @dateHired, @isFired)";
            cmd.Parameters.AddWithValue("@driverID", driver.ID);
            cmd.Parameters.AddWithValue("@driverName", driver.Name);
            cmd.Parameters.AddWithValue("@driverRating", driver.Rating);
            cmd.Parameters.AddWithValue("@dateHired", driver.DateHired);
            cmd.Parameters.AddWithValue("@isFired", driver.Deleted);
            cmd.Prepare();
            cmd.ExecuteNonQuery();

        }
    }
}