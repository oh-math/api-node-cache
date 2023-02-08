import { Request, Response, Router } from "express";
import * as postSchema from "../schema/post.schema";
import { validate } from "../middleware";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../service";

const router = Router();

router.post(
  "/posts/",
  validate(postSchema.createPost),
  async (req: Request, res: Response) => {
    try {
      const result = await createPost(req.body);
      res.json({ result });
    } catch (error) {
      res.status(404);
      console.error(error);
    }
  }
);

router.get("/posts/:id", async (req: Request, res: Response) => {
  try {
    const result = await getPost(req.params.id);
    res.json({ result });
  } catch (error) {
    res.status(404);
    console.error(error);
  }
});

router.get("/posts/", async (req: Request, res: Response) => {
  try {
    const result = await getAllPosts();
    res.json({ result });
  } catch (error) {
    res.status(404);
    console.error(error);
  }
});

router.put(
  "/posts/:id",
  validate(postSchema.updatePost),
  async (req: Request, res: Response) => {
    try {
      const result = await updatePost(req.params.id, req.body);
      res.json({ result });
    } catch (error) {
      res.status(404);
      console.error(error);
    }
  }
);

router.delete("/posts/:id", async (req: Request, res: Response) => {
  try {
    await deletePost(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(404);
    console.error(error);
  }
});

export default router;
