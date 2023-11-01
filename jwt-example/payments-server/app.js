const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
app.use(express.json());

// Middleware to validate JWT tokens using RSA
const checkJwt = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authorization.slice(7, authorization.length);

    const publicKey = fs.readFileSync('./public.key').toString();

    jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = decoded;
        next();
    });
};

// Sample protected route
app.get('/api/payments', checkJwt, (req, res) => {
    res.json({ message: 'This is a protected route that should return payments of user', user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
