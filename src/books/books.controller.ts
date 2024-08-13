import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  @Get()
  findAll(): string {
    return 'Return all books';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This is a book with id ${id}`;
  }

  @Post()
  createBook(@Body() body: CreateBookDTO): string {
    return `Created book successfully with name: ${body.name} and year: ${body.yearPublish}`;
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): string {
    return `Deleted book with id ${id} successfully`;
  }
}
