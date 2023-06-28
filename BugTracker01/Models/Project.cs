using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BugTracker01.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Description must be between 3 and 50 characters.")]
        public string Name { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 3, ErrorMessage = "Description must be between 3 and 255 characters.")]
        public string Description { get; set; }

        [Required]
        [ForeignKey("User")]
        public int UserId { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreatedAt { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime UpdatedAt { get; set; }

        // Navigation property for the associated User
        public User User { get; set; }
    }
}