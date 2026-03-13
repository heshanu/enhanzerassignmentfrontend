#Book Management System

##Assignment for Enhanzer

A full-stack book management application built with Angular and .net

## Features

- **Landing Page** - Hero section with featured books showcase
- **Book Management** - Full CRUD operations (Create, Read, Update, Delete)


## Tech Stack

| Layer    | Technology                  |
|----------|-----------------------------|
| Frontend | Angular 20, TypeScript      |
| Backend  | ASP.NET Core Web API, C#    |
| Storage  | In-memory (ArrayList)       |
| Styling  | NG-ZORROW angular library   |

## Project Structure

```
BMS/
├── BookAPI/                    # ASP.NET Core Web API
│   ├── Controllers/
│   │   
│   │   └── BooksController.cs  # Book CRUD endpoints
│   ├── Models/
    
│   │   ├── Book.cs             # Book entity (Title, Author, ISBN, PublicationDate, Subject)
│   │   └─
│   ├── Services/
│   │   ├── BookService.cs      # Book business logic with seed data
│   │   └── UserService.cs      # User/auth business logic
│   └── Program.cs              # App configuration, CORS, DI
└── BMS.sln                     # Solution file
```

## API Endpoints

### Books
| Method | Endpoint           | Description       |
|--------|--------------------|--------------------|
| GET    | https://localhost:7257/api/v1/booklist          | Get all books      |
| GET    | /https://localhost:7257/api/v1/booklist/:id     | Get book by ID     |
| POST   |https://localhost:7257/api/v1/booklist           | Add a new book     |
| PUT    |https://localhost:7257/api/v1/booklist/:id       | Update a book      |
| DELETE | https://localhost:7257/api/v1/booklist          | Delete a book      |

### Book Model
| Field            | Type     | Description                        |
|------------------|----------|------------------------------------|
| id               | int      | Auto-generated ID                  |
| title            | string   | Book title                         |
| author           | string   | Author name                        |
| isbn             | string   | ISBN number                        |
| publicationDate  | DateTime | Publication date                   |

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (v18+)
- [Angular CLI](https://angular.dev/) (`npm install -g @angular/cli`)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd 
```

### 2. Run the backend

```bash
cd enhanz
dotnet run
```

The API will start at `http://localhost:5023`. Swagger UI is available at `http://localhost:5023/swagger`.

### 3. Run the frontend

```bash
cd booklistfrontend-main/bookassignment
npm install
npm start
```

The app will be available at `http://localhost:4200`.

## Usage

1. Open `http://localhost:4200` to see the landing page
2. Click **Get Started** to go to the login page
