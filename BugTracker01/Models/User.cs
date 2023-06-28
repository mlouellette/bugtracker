using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace BugTracker01.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        public DateOnly Birthdate { get; set; }
        [Required]
        public string AuthO_ID { get; set; }
        [Required]
        [StringLength(50)]
        [DefaultValue("developer")]
        public string Role { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreatedAt { get; set; }
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime UpdatedAt { get; set; }
    }
}