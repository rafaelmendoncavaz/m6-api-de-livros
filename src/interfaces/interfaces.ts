import type { Request, Response } from "express"

export interface Book {
  id: number
  name: string
  pages: number
  category?: string
  createdAt: Date
  updatedAt: Date
}

export type CreateBook = Pick<Book, "name" | "pages" | "category">

export interface ServiceMethods {
  create(body: CreateBook): Book
  getMany(): Book[]
  getById(id: string): Book
  update(id: string, body: Partial<CreateBook>): Book
  delete(id: string): void
}

export interface ControllerMethods {
  create(req: Request, res: Response): Response
  getMany(req: Request, res: Response): Response
  getById(req: Request, res: Response): Response
  update(req: Request, res: Response): Response
  delete(req: Request, res: Response): Response
}