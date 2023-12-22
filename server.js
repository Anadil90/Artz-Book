const express = require('express');

const app = express();
require('dotenv').config;

const port = 3000 || process.env.port
app.listen(3001, () => {
    console.log(`backend server running on port ${port}`)
})