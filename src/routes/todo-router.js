import express from "express";
import { getallTodos } from "../controllers/todo-controller.js";

const todoRouter = express.Router();

todoRouter.get("/todos", getallTodos);

export default todoRouter;

("/api/todos");
