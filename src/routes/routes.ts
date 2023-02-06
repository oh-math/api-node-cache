import { Router } from "express";
import postController from "../controller/post.controller";
import userController from "../controller/user.controller";

const api = Router().use(userController).use(postController);

export default Router().use("/api", api);
