import bodyParser from "body-parser";
import express from "express";
import connectToMongo from "./config/mongo.js";
import dotenv from "dotenv";
import todoRouter from "./routes/todo-router.js";
import swaggerMiddleware from "./middlewears/swagger-middlewear.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", todoRouter);
app.use("/", ...swaggerMiddleware());

app.listen(3000);
