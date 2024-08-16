import generateId, { booksDatabase } from "../database/database";
import type { Book, CreateBook, ServiceMethods, UpdateBook } from "../interfaces/interfaces";

class Services implements ServiceMethods {

  create(body: CreateBook): Book {
    const newBook: Book = {
      ...body,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    booksDatabase.push(newBook)

    return newBook
  }

  getMany(search?: string): Book[] {
    const filterByName = search ? booksDatabase.filter(book => book.name.toLowerCase().includes(search.toLowerCase())) : booksDatabase

    return filterByName
  }

  getById(id: string): Book {
    const findBook: Book = booksDatabase.find(book => book.id === Number(id)) as Book

    return findBook
  }

  update(id: string, body: UpdateBook): Book {
    const findBook = booksDatabase.find(book => book.id === Number(id)) as Book
    const updatedBook = {
      ...findBook,
      ...body,
      updatedAt: new Date()
    }

    const idx = booksDatabase.findIndex(book => book.id === Number(id))
    booksDatabase.splice(idx, 1, updatedBook)

    return updatedBook
  }

  delete(id: string): void {
    const idx = booksDatabase.findIndex(book => book.id === Number(id))

    booksDatabase.splice(idx, 1)
  }
}

export default Services