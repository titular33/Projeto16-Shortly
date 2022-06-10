import { urlRepository } from '../../repositories/urls.jsx';
import { UrlSchema } from '../../validation/schemas.jsx';



export async function validateUrlId(req, res, next) {
    const { urlId } = req.params;

    try {
        const query = `SELECT * FROM urls WHERE id = ${urlId} AND "isActive" = true`;
        const result = await db.query(query);
        if (result.rows.length === 0) {
            return res.status(404).send({ error: "Url is inactive" });
        }
        const url = result.rows[0];
        res.locals.url = url;
        next();
    } catch (err) {
        res.status(500).send({ error: err });
    }
}

export async function validateOwner(req, res, next) {
    const { userId, url } = res.locals;
    if (url.userId !== userId) {
        return res.status(401).send({ error: "User is not the owner" });
    }
    next();
}

export async function validateShortUrl(req, res, next) {
    const { shortUrl } = req.params;
    try {
        const query = `SELECT * FROM urls WHERE "shortUrl" = '${shortUrl}' AND "isActive" = true;`;
        const result = await db.query(query);
        if (result.rows.length === 0) return res.status(404).send({ error: "Url not found" });
        res.locals.url = result.rows[0];
        next();
    } catch (err) {
        res.status(500).send({ error: err });
    }
}