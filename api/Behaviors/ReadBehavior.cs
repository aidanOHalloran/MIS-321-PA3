using MySql.Data.MySqlClient;
using System.Data;
using MySql.Data;
using api.Interfaces;
using api.Models;

namespace api.Behaviors
{
    public class ReadBehavior : IGetDriver, IGetAllDrivers
    {
       public List<Driver> GetAllDrivers(){
        string cs = @"server=localhost;user=root;database=PA3;port=3306;password=panthers57";

        using var connection = new MySqlConnection(cs);
        connection.Open();

        string stm = "SELECT * FROM Drivers";
        using var cmd = new MySqlCommand(stm, connection);

        using MySqlDataReader reader = cmd.ExecuteReader();

        List<Driver> AllDrivers = new List<Driver>();
        while(reader.Read()){
            AllDrivers.Add(new Driver(){ID = reader.GetInt32(0), Name = reader.GetString(1), Rating = reader.GetInt32(2),DateHired = reader.GetDateTime(3), Deleted = reader.GetBoolean(4)});
        }
        return AllDrivers;

       }

       public Driver GetDriver(int id){
        string cs = @"server=localhost;user=root;database=PA3;port=3306;password=panthers57";

        using var connection = new MySqlConnection(cs);
        connection.Open();

        string stm = "SELECT * FROM Drivers WHERE driverID = @driverID";
        using var cmd = new MySqlCommand(stm, connection);
        cmd.Parameters.AddWithValue("@driverID", id);
        cmd.Prepare();
        using MySqlDataReader reader = cmd.ExecuteReader();

        reader.Read();
        return new Driver(){ID = reader.GetInt32(0), Name = reader.GetString(1), Rating = reader.GetInt32(2),DateHired = reader.GetDateTime(3), Deleted = reader.GetBoolean(4)};
       }
    }
}