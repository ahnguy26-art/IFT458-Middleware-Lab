
const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Apply the logger middleware
app.use(loggerMiddleware);

// Home route
app.get('/', (req, res) => {
    res.send('Middleware implementation successful!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
