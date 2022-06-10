import { Router } from "express";
import { validateUserId } from "./middlewares.jsx";
import { getRanking, getUserById } from "./controllers.jsx";
import {helloworld} from "../../utils/controllers.jsx";

const router = Router();

router.get('/:id/userId', validateUserId, getUserById);
router.get('/ranking', getRanking);
router.get('/ola', helloWorld);
export default router;