import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../db/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            try {
                const { id } = req.query;
                const todo = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);

                res.status(200).json(todo.rows[0]);
            } catch (e) {
                console.error(e);
            }
            break;

        case 'PUT':
            try {
                const {
                    query: { id },
                    body,
                } = req;

                console.log(id);

                const updatedTodo = await pool.query('UPDATE todos SET done = NOT $1 WHERE id = $2 RETURNING *', [
                    body.done,
                    id,
                ]);
                return res.status(200).json(updatedTodo.rows[0]);
            } catch (e) {
                console.error(e);
            }
            break;
    }
};
