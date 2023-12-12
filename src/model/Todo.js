import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
  completed: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;

// console.log("afsdfsdf")
