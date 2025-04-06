import express, { Request, Response } from "express";
import { mainRoute } from "./routes";

const app = express();

app.use(express.json())

app.use('/api/v1', mainRoute);

app.listen(3000, () => {
  console.log("app is running on http://localhost:3000")
})
