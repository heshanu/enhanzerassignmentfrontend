using enhanz.Models;
using enhanz.Respository;

namespace enhanz.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _repo;
        //dependency injection using contructor
        public BookService(IBookRepository repo)
        {
            _repo = repo;
        }

        public List<Book> GetAllBooks()
        {
            return _repo.GetAll();
        }

        public Book GetBook(int id)
        {
            return _repo.GetById(id);
        }

        public void AddBook(Book book)
        {
            _repo.Add(book);
        }

        public void UpdateBook(Book book)
        {
            _repo.Update(book);
        }

        public void DeleteBook(int id)
        {
            _repo.Delete(id);
        }
    }
}
