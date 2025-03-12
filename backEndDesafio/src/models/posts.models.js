import { pool } from "../../config/db/conection.db.js";

const getPostsSql = async () => {
  const SQLquery = {
    text: "SELECT * FROM posts",
  };
  const result = await pool.query(SQLquery);
  return result.rows;
};

const addPosts = async (titulo, img, descripcion, likes) => {
  const SQLquery = {
    text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [titulo, img, descripcion, likes],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const setPosts = async (titulo, img, descripcion, likes, post_id, oldData) => {
  const newtitulo = titulo || oldData.titulo;
  const newimg = img || oldData.img;
  const newdescripcion = descripcion || oldData.descripcion;
  const newlikes = likes || oldData.likes;
  const SQLquery = {
    text: "UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING * ",
    values: [newtitulo, newimg, newdescripcion, newlikes, post_id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const getByposts = async (id) => {
  const SQLquery = {
    text: "SELECT * FROM posts WHERE id = $1",
    values: [Number(id)],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const destroyPosts = async (id) => {
   const SQLquery = {
    text : "DELETE from posts WHERE id = $1 ",
    values : [Number(id)]
  }
  const response = await pool.query(SQLquery);
  return response.rowCount;
  
  
}




export { getPostsSql, addPosts, setPosts, getByposts, destroyPosts}
