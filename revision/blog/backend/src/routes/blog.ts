import { Router, Request, Response } from "express";

const blogRoute = Router();

blogRoute.get("/", async (req: Request, res: Response) => {
  res.json("hello from blogRoute");
})

export = blogRoute;
