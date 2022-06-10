import { Router } from "express";
import { validateOwner, validateUrlId, validateShortUrl, validateUrl } from "./middlewares.jsx";
import { createShortUrl, deleteUrl, findUrlById, redirectToUrl } from "./controllers.jsx";
import {validateSchema, validateToken } from "../../validation/middlewares.jsx";

const router = Router();

router.post('/shorten', validateToken, validateSchema, createShortUrl);
router.get('/:urlId',validateUrlID, findUrlById);
router.get('/open/:shortUrl', validateShortUrl, redirectToUrl);
router.delete('/:urlid', validateToken, validateUrlId, validateOwner, deleteUrl);

export default router;