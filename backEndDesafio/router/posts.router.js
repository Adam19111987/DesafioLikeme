import express from "express";
import {getPosts, createPosts, upDateposts, deletePosts} from "../src/controller/posts.controller.js"
import {Createmiddleware, upDateMiddleware} from "../middlewares/posts.middleware.js"
const router = express.Router();

router.get("/posts", getPosts)
router.post("/posts", Createmiddleware, createPosts )
router.put("/posts/:post_id", upDateMiddleware, upDateposts);
router.delete("/posts/:id", deletePosts)


export  default router  