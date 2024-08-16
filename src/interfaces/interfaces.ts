import type { Request, Response } from "express"
import type { AnyZodObject, z } from "zod"
import type { bookSchema, bookSchemaPartial } from "../schemas/schema"

export interface Book {
  id: number
  name: string
  pages: number
  category?: string
  createdAt: Date
  updatedAt: Date
}

export type CreateBook = z.infer<typeof bookSchema>
export type UpdateBook = z.infer<typeof bookSchemaPartial>

export interface ServiceMethods {
  create(body: CreateBook): Book
  getMany(search?: string): Book[]
  getById(id: string): Book
  update(id: string, body: UpdateBook): Book
  delete(id: string): void
}

export interface ControllerMethods {
  create(req: Request, res: Response): Response
  getMany(req: Request, res: Response): Response
  getById(req: Request, res: Response): Response
  update(req: Request, res: Response): Response
  delete(req: Request, res: Response): Response
}

export interface ValidateRequests {
  body?: AnyZodObject
  params?: AnyZodObject
  query?: AnyZodObject
}