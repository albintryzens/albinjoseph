const express = require('express');
require('dotenv').config();
const server = express();
const PORT = process.env.PORT;

server.get('/', (req, res) => {
    res.send('Home Loaded');
});

server.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));