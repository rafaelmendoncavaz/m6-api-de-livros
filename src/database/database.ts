import type { Book } from "../interfaces/interfaces";

export const booksDatabase: Book[] = []

let id: number = 0
function generateId(): number {
  id++
  return id
}

export default generateId