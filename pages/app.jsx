import express, { json } from "express";
import cors from "cors";
import authRouter from './routers/auth1/router.jsx';
import usersRouter from './routers/users/router.jsx';
import urlsRouter from './routers/urls/router.jsx';
import { teste } from "./routers/validation/controllers.jsx";
import '../styles/globals.css'
import { getRanking } from "./routers/users/controllers.jsx";

const MyApp = express();
MyApp.use(json());
MyApp.use(cors());

MyApp.use('/routers/auth', authRouter);
MyApp.use('/routers/users', usersRouter);
MyApp.use('/routers/urls', urlsRouter);
MyApp.get('/', teste);
MyApp.get('/ranking', getRanking);
export default MyApp;