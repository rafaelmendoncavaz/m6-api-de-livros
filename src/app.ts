import "express-async-errors"
import express, { json } from "express";
import route from "./routes/routes";
import middlewares from "./middlewares/middlewares";
import helmet from "helmet";

export const app = express();

app.use(helmet())
app.use(json());
app.use("/books", route)
app.use(middlewares.handleError)