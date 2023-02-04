import { Request, Response, Router } from "express";
import { createUser, deleteUser, getUser } from "../service/user.service";

const router = Router();

router.post("/users", async (req: Request, res: Response) => {
  try {
    const result = await createUser(req.body);
    res.json({ result });
  } catch (error) {
    res.status(404);
    console.error(error);
  }
});

router.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await getUser(req.params.id);
    res.json({ result });
  } catch (error) {
    res.status(404);
    console.error(error);
  }
});

router.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    await deleteUser(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(404);
    console.error(error);
  }
});

export default router;
