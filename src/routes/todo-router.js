import express from "express";
import { getallTodos, getallTodos2 } from "../controllers/todo-controller.js";

const todoRouter = express.Router();

todoRouter.get("/todos", getallTodos);
todoRouter.get("/todos2", getallTodos2);

export default todoRouter;

("/api/todos");
