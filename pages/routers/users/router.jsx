import { Router } from "express";
import { validateUserId } from "./middlewares.jsx";
import { getUserById } from "./controllers.jsx";


const router = Router();

router.get('/:userId', validateToken, validateUserId, getUserById);

export default router;