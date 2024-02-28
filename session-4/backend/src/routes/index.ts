import { Router } from "express";
import userRouter from './user'
import accountRoute from "./account";

const router : Router = Router();

router.use('/api/v1/user',userRouter);
router.use('/api/v1/account',accountRoute);

export default router;