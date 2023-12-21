import express from "express";
import {
  deleteTodo,
  getallTodos,
  postTodo,
  putTodo,
} from "../controllers/todo-controller.js";

const todoRouter = express.Router();

todoRouter.get("/todos", getallTodos);
todoRouter.post("/send", postTodo);
todoRouter.put("/:id", putTodo);
todoRouter.delete("/delete/:id", deleteTodo);

export default todoRouter;
