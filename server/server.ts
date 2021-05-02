import express from 'express';
import dotenv from 'dotenv';
import next from 'next';
import createServer from 'http';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url!, true);
        const { pathname, query } = parsedUrl;

        if (pathname === '/a') {
            app.render(req, res, '/a', query);
        } else if (pathname === '/b') {
            app.render(req, res, '/b', query);
        } else {
            handle(req, res, parsedUrl);
        }
    }).listen(port);

    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
});
