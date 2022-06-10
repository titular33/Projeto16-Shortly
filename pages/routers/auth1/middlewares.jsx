import db from '../../db.jsx';

export const validateCredentials = async (req, res, next) => {
    const { email, password } = req.body;
    try {

        next();
    } catch (err) {
        res.status(500).send({ error: err });
    }
};

export const validateEmailAvailable = async (req, res, next) => {
    const { email } = req.body;
    try {
        next();
    } catch (err) {
        res.status(500).send({ error: err });
    }
};

export const validateSignInBody = (req, res, next) => {
    
    next();
};

export const validateUserBody = (req, res, next) => {
    
    next();
};