import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/api/hello', (req, res) => {
    res.send('Hello, friend!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
