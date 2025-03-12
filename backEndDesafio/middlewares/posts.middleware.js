import { CreateShemasMiddle,  upDateShemasMiddle } from "../middlewares/shema/posts.shema.js";
import {getByposts} from "../src/models/posts.models.js"
const Createmiddleware = async (req, res, next) => {
  const { error } = CreateShemasMiddle.validate(req.body);
  if (error) {
    res.status(400).json(error.details.map((detail) => detail.message));
  }

  next();
};
const upDateMiddleware = async (req, res, next) => {
  const {post_id} = req.params
  const { error } =  upDateShemasMiddle.validate(req.body);
  if (error) {
    res.status(400).json(error.details.map((detail) => detail.message));
  }

  const posts = await getByposts(post_id);
  if(!posts){
    res.status(404).json({message : "no encontrado"})
  }
    req.oldData = posts;
  next();
};

export { Createmiddleware, upDateMiddleware };
