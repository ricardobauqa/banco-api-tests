const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
    console.log('Received body:', req.body);
    const { username, password } = req.body;

    if (username === 'julio.lima' && password === '123456') {
        return res.status(200).json('fake-jwt-token-123456');
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
