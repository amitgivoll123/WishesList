using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TestASP
{
    [Serializable]
    public class WishItem
    {
        
        [Key, Required]
        public int Id { get; set; }
        [Required]
        public string wishText { get; set; }
        [Required]
        public bool isComplete { get; set; }
    }
}
