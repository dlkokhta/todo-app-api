import Todo from "../model/Todo.js";

export const getallTodos = async (req, res) => {
  const data = await Todo.find();
  return res.json(data);
};

export const getallTodos2 = async (req, res) => {
  const id = 2;
  const data = await Todo.findOne({ id });
  return res.json(data);
};
