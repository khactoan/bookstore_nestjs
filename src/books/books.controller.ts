import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';
import { BookDTO } from './dto/book.dto';
import { UpdateBookDTO } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  private books: Array<BookDTO> = [
    { id: 1, title: 'Hoc lap trinh', publishedYear: 2024 },
  ];

  @Get()
  findAll(): BookDTO[] {
    return this.books;
  }

  @Get(':id')
  findOne(@Param('id') id: string): BookDTO {
    const book = this.books.find((book) => book.id === Number(id));
    return book;
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() updateBook: UpdateBookDTO) {
    const book = this.books.find((book) => book.id === Number(id));
    const newBook = Object.assign(book, updateBook);

    const newBooks = this.books.map((book) => {
      if (book.id === Number(id)) {
        return newBook;
      } else {
        return book;
      }
    });

    this.books = newBooks;
    return newBook;
  }

  @Post()
  createBook(@Body() book: CreateBookDTO): string {
    this.books.push(book);
    return `Created book with id: ${book.id} successfully`;
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): BookDTO[] {
    this.books = this.books.filter((book) => book.id !== Number(id));
    return this.books;
  }
}
