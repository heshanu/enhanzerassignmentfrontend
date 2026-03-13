using enhanz.Models;

namespace enhanz.Services
{
    public interface IBookService
    {
        List<Book> GetAllBooks();
        Book GetBook(int id);
        void AddBook(Book book);
        void UpdateBook(Book book);
        void DeleteBook(int id);
    }
}
