import { Router } from "express"
import middlewares from "../middlewares/middlewares"
import Controllers from "../controllers/controllers"

const route = Router()
const books = new Controllers()

route.post("/", middlewares.handleNameRequest, books.create)

route.get("/", books.getMany)

route.get("/:id", middlewares.handleIdRequest, books.getById)

route.patch("/:id", middlewares.handleIdRequest, middlewares.handleNameRequest, books.update)

route.delete("/:id", middlewares.handleIdRequest, books.delete)

export default route