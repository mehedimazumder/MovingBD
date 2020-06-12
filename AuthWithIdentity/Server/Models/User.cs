using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Server.Models
{
    public class User : IdentityUser<int>
    {
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime Created { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Mobile { get; set; }
        public string MemberAs { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}