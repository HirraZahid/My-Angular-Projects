const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = 'your_secret_key';
const REFRESH_SECRET_KEY = 'your_refresh_secret_key';

let refreshTokens = [];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt with username: ${username}`);

    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ username }, REFRESH_SECRET_KEY);
        refreshTokens.push(refreshToken);

        console.log(`User ${username} logged in successfully`);
        res.json({ token, refreshToken });
    } else {
        console.log(`Login attempt failed for username: ${username}`);
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/refresh', (req, res) => {
    const { token } = req.body;
    console.log(`Token refresh request`);

    if (!token) return res.sendStatus(401);
    if (!refreshTokens.includes(token)) return res.sendStatus(403);

    jwt.verify(token, REFRESH_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        const newToken = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '15m' });

        console.log(`Token refreshed for user ${user.username}`);
        res.json({ token: newToken });
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
