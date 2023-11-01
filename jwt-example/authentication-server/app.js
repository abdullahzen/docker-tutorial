const express = require('express');
const jwt = require('jsonwebtoken');
const jwksRsa = require('jwks-rsa');
const fs = require('fs');

const app = express();
app.use(express.json());

// Sample login endpoint to generate tokens
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // You should implement your own logic for user authentication here
    // For simplicity, let's assume a successful login for any non-empty username/password

    if (username && password) {
        const user = { username }; // You can include more user details here

        const privateKey = fs.readFileSync('./private.key').toString(); // Replace with your private key
        const token = jwt.sign(user, privateKey, { algorithm: 'RS256' });

        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
