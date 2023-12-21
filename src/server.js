import bodyParser from "body-parser";
import express from "express";
import connectToMongo from "./config/mongo.js";
import dotenv from "dotenv";
import todoRouter from "./routes/todo-router.js";
import swaggerMiddleware from "./middlewears/swagger-middlewear.js";
import { getallTodos } from "./controllers/todo-controller.js";
import cors from "cors";

const server = express();
dotenv.config();
server.use(cors());
connectToMongo();

server.use(bodyParser.json());

server.use("/api", todoRouter); //get

server.use("/", ...swaggerMiddleware());

server.listen(process.env.PORT || 3000);
