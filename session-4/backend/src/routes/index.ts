import { Router } from "express";
import userRouter from './user'

const router : Router = Router();

router.use('/api/v1/user',userRouter);

export default router;