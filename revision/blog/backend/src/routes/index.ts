import { Router, Request, Response } from "express";
import blogRoute from "./blog";

export const mainRoute = Router();

mainRoute.use('/blog', blogRoute);
