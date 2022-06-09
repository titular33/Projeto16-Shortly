import express, { json } from "express";
import cors from "cors";
import authRouter from './routers/1.auth/router.js';
import usersRouter from './routers/2.users/router.js';
import urlsRouter from './routers/3.urls/router.js';
import { helloWorld } from "./utils/controllers.js";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = express();
MyApp.use(json());
MyApp.use(cors());

MyApp.use('/api/auth', authRouter);
MyApp.use('/api/users', usersRouter);
MyApp.use('/api/urls', urlsRouter);
MyApp.get('/', helloWorld);
export default MyApp;