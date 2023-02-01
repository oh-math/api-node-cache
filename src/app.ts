import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: Number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
