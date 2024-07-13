using TestASP;

namespace TestingASP
{
    public interface IWishesSerivce
    {
        List<WishItem> GetAll();

        void SaveChanges(WishItem[] wishes);

    }
}
