import {
  getPostsSql,
  addPosts,
  setPosts,
  destroyPosts,
} from "../models/posts.models.js";
import { findError } from "../util/find.error.util.js";

const getPosts = async (req, res) => {
  try {
    const post = await getPostsSql();
    res.status(201).json(post);
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message, type: errorFound[0].type });
  }
};

const createPosts = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;
    const posts = await addPosts(titulo, img, descripcion, likes);
    return res.status(201).json({ message: "ha sido creado exitosamente" });
  }  catch (error) {
    const errorFound = findError(error.code);
    return res.status(errorFound[0].status).json({ error: errorFound[0].message, type: errorFound[0].type });
  }
  };


const upDateposts = async (req, res) => {
  const { post_id } = req.params;
  const { titulo, img, descripcion, likes } = req.body;
  const oldPots = req.oldData;
  try {
    const response = await setPosts(
      titulo,
      img,
      descripcion,
      likes,
      post_id,
      oldPots
    );
    res.status(201).json(response);
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message, type: errorFound[0].type });
  }
};

const deletePosts = async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await destroyPosts(id);
   return res.status(204).json({ message: "mensaje eliminado con exito "});
  } catch (error) {
    // const errorFound = findError(error.code);
    // return res
    //   .status(errorFound[0].status)
    //   .json({ error: errorFound[0].message, type: errorFound[0].type });
  }
};

export { getPosts, createPosts, upDateposts, deletePosts };
