import db from '../../db.jsx';
import { SignInSchema, UserSchema } from '../validation/schemas.js';
import bcrypt from 'bcrypt';
import { userRepository } from '../../repositories/user.jsx';
export const validateToken= async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await userRepository.getUserByEmail(email);
        if (!user) return res.status(409).send({ error: "Email não registrado" });
        if (!bcrypt.compareSync(password, user.password)) return res.status(401).send({ error: "Senha errada" });
        res.locals.user = user;
        next();
    } catch (err) {
        res.status(500).send({ error: err });
    }
};
export const validateEmailAvailable = async (req, res, next) => {
    const { email } = req.body;
    try {
        console.log('> checking email availability');
        const user = await userRepository.getUserByEmail(email);
        console.log('> user:', user);
        if (user) return res.status(409).send({ error: "Email já registrado doidão" });
        next();
    } catch (err) {
        res.status(500).send({ error: err });
    }
};
export const validateSignInBody = (req, res, next) => {
    const { error } = SignInSchema.validate(req.body);
    if (error) return res.status(422).send({ error: error.details[0].message });
    next();
};
export const validateUserBody = (req, res, next) => {
    const { error } = UserSchema.validate(req.body);
    if (error) return res.status(422).send({ error: error.details[0].message });
    next();
};