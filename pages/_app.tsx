import express, { json } from "express";
import cors from "cors";
import authRouter from './routers/1.auth/router.jsx';
import usersRouter from './routers/2.users/router.jsx';
import urlsRouter from './routers/3.urls/router.jsx';
import { helloWorld } from "./utils/controllers.jsx";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = express();
MyApp.use(json());
MyApp.use(cors());

MyApp.use('/routers/auth', authRouter);
MyApp.use('/routers/users', usersRouter);
MyApp.use('/routers/urls', urlsRouter);
MyApp.get('/', helloWorld);
export default MyApp;