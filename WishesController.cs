using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestASP;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestingASP
{
    [Route("")]
    [ApiController]
    public class WishesController : ControllerBase
    {
        private readonly IWishesSerivce Iws;

        public WishesController(IWishesSerivce ws)
        {
            this.Iws = ws;
        }
        //GET: /<ValuesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WishItem>>> GetWishes()
        {
            return Iws.GetAll();
        }

        [HttpPost]
        public void SaveAll([FromBody] WishItem[] wishes)
        {
            Iws.SaveChanges(wishes);
            /*Iws.SaveChanges(wishes);*/
        }

        /*private readonly WishItemService wishItemService;

        private readonly MyContext _context;

        public ValuesController(WishItemService w)
        {
            this.wishItemService = w;
        }

        // GET: /<ValuesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WishItem>>> GetProducts()
        {
            return await _context.Wishes.ToListAsync();
        }

        // POST /<ValuesController>
        [HttpPost]
        public void Post([FromBody] WishItem wish)
        {
            _context.Wishes.Add(wish);
        }*/
    }
}
