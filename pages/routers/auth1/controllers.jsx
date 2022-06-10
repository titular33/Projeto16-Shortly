import db from "../..db.jsx";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userRepository } from '../../repositories/user.jsx';
export async function createSession(req, res) {
    console.log('creating session');
    const userId = res.locals.user.id;
    try {
        const query = `INSERT INTO sessions ("userId") VALUES ($1) RETURNING *`;
        const result = await db.query(query, [userId]);
        const session = result.rows[0];
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign({ sessionId: session.id }, secretKey);
        res.status(201).send(token);
    } catch (e) {
        res.status(500).send({ error: e });
    }
}

export async function createUser(req, res) {
    const { name, email, password } = req.body;
   
    try {
        const newUser = await userRepository.createUser(name, email, password);
        res.status(201).send(newUser);
    } catch (e) {
        res.status(500).send({ error: e })
    }
}