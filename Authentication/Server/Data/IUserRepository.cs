using System.Collections.Generic;
using System.Threading.Tasks;
using Server.Models;

namespace Server.Data
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetUsers();
    }
}