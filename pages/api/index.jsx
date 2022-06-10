import dotenv from "dotenv";
import app from "../app.jsx/index.js";
import chalk from 'chalk';

dotenv.config();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(chalk.bold.green(`Servidor em pé na porta ${port}`)));
