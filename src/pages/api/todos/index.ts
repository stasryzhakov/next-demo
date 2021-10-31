import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../db/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { todo: todoBody, done } = req.body;

    if (req.method === 'GET') {
        try {
            const todos = await pool.query('SELECT * FROM todos');
            return res.status(200).json(todos.rows);
        } catch (e) {
            console.log(e);
        }
    }

    if (req.method === 'POST') {
        try {
            const l = await pool.query('INSERT INTO todos (todo, done) VALUES (todo, done) RETURNING *;', [
                todoBody,
                done,
            ]);
            res.status(200).json(l);
        } catch (e) {
            return res.status(500).json({ e });
        }
    }
};
