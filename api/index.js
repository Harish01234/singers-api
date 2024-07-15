import express from 'express';
import { singers } from '../singers.js';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.json(singers);
});

app.listen(port, () => {
    console.log(`App running on port number ${port}`);
});

// No need for module.exports in ES modules
export default app;
