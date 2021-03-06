using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Please enter Email Address")]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 to 8 characters")]
        public string Password { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        public DateTime Created { get; set; }

        [Required(ErrorMessage = "Please Provide Your 11-Digit Mobile Number")]
        [StringLength(11)]
        public string Mobile { get; set; }
        [Required]
        public string MemberAs { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
        }
    }
}