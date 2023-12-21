import { request } from "express";
import Todo from "../model/Todo.js";

export const getallTodos = async (req, res) => {
  const data = await Todo.find();
  return res.json(data);
};

export const postTodo = async (req, res) => {
  const { title, completed } = req.body;
  const item = new Todo({ title, completed });
  const result = await item.save();
  res.status(200).json({ message: "Successfully created todo", todo: result });
};

export const putTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id });
    // console.log("todo", todo);
    // console.log("id", id);
    todo.completed = !todo.completed;
    await todo.save();
    res.status(201).json({ message: "Successfully change todo" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.deleteOne(id);

    if (!todo) {
      res.status(404).send({ error: "Todo not found" });
    } else {
      res.status(201).send({ message: "Todo deleted successfully" });
    }
  } catch (err) {
    console.error("Error", err);
    res.status(500).send({ error: "Server error" });
  }
};
