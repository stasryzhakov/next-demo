import { Pool } from 'pg';

export const pool = new Pool({
    user: 'stanislav',
    password: '0110',
    host: 'localhost',
    port: 5432,
    database: 'todos',
});
