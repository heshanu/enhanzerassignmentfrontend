using enhanz.Models;

namespace enhanz.Respository
{
    public class BookRepository : IBookRepository
    {
        private static List<Book> books = new List<Book>();

        public List<Book> GetAll()
        {
            return books;
        }

        public Book GetById(int id)
        {
            return books.FirstOrDefault(b => b.Id == id);
        }

        public void Add(Book book)
        {
            books.Add(book);
        }

        public void Update(Book book)
        {
            var existing = books.FirstOrDefault(b => b.Id == book.Id);

            if (existing != null)
            {
                existing.Title = book.Title;
                existing.Author = book.Author;
                existing.Isbn = book.Isbn;
                existing.PublicationDate = book.PublicationDate;
            }
        }

        public void Delete(int id)
        {
            var book = books.FirstOrDefault(b => b.Id == id);
            if (book != null)
            {
                books.Remove(book);
            }
        }
    }
}
