import express from "express";
import cors from "cors";
import { envs } from "./config/envs.js";
import Routerposts from "./router/posts.router.js";
const app = express();


app.use(cors('*'));

app.use(express.json());

const port = envs.port;
app.listen(port, console.log(`Server Runnig port : ${port} `));

app.use("/api", Routerposts);
