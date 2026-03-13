using enhanz.Models;
using enhanz.Services;
using Microsoft.AspNetCore.Mvc;

namespace enhanz.Controllers
{
    
    [ApiController]
    [Route("api/v1/booklist")]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _service;
        //dependency injection using constructor
        public BooksController(IBookService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(_service.GetAllBooks());
        }

        [HttpGet("{id}")]
        public IActionResult GetBook(int id)
        {
            var book = _service.GetBook(id);

            if (book == null)
                return NotFound();

            return Ok(book);
        }

        [HttpPost]
        public IActionResult AddBook(Book book)
        {
            _service.AddBook(book);
            return Ok(book);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, Book book)
        {
            book.Id = id;
            _service.UpdateBook(book);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            _service.DeleteBook(id);
            return NoContent();
        }
    }
}
