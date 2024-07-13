using TestASP;

namespace TestingASP
{
    public class WishesService : IWishesSerivce
    {
        public readonly ContextDB context;
        public WishesService(ContextDB context) { this.context = context; }

        public void SaveChanges(WishItem[] wishes)
        {
            WishItem[] w = context.Wishes.ToArray();
            for (int i = 0; i < w.Length; i++)
            {
                context.Wishes.Remove(w[i]);
            }
            for (int i = 0; i < wishes.Length; i++)
            {
                context.Wishes.Add(new WishItem() { wishText = wishes[i].wishText, isComplete = wishes[i].isComplete });
            }
            context.SaveChanges();
        }

        public List<WishItem> GetAll()
        {
            return context.Wishes.ToList();
        }
    }
}
