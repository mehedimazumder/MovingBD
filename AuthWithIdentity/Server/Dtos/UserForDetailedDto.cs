using System;

namespace Server.Dtos
{
    public class UserForDetailedDto
    {
        public string Email { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string UserName { get; set; }
        public DateTime Created { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Mobile { get; set; }
        public string MemberAs { get; set; }
    }
}