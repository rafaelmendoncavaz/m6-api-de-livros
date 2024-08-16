import { Router } from "express"
import middlewares from "../middlewares/middlewares"
import Controllers from "../controllers/controllers"
import { bookSchema, bookSchemaPartial } from "../schemas/schema"

const route = Router()
const books = new Controllers()

route.post("/", middlewares.validateRequest({
  body: bookSchema
}), middlewares.handleNameRequest, books.create)

route.get("/", books.getMany)

route.get("/:id", middlewares.handleIdRequest, books.getById)

route.patch("/:id", middlewares.validateRequest({
  body: bookSchemaPartial
}), middlewares.handleIdRequest, middlewares.handleNameRequest, books.update)

route.delete("/:id", middlewares.handleIdRequest, books.delete)

export default route