import Todo from "../model/Todo.js";

export const getallTodos = async (req, res) => {
  const data = await Todo.find();
  return res.json(data);
};
