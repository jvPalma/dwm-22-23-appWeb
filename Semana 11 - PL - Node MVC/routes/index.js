import Router from 'express';
import fs from 'fs';

const routes = Router();

const datajson = fs.readFileSync('data.json', 'utf-8'); // Read string-json from file
const users = JSON.parse(datajson); // Parse to JSON

// {host}/api/...

export { routes };
