const express = require('express');

const app = express();
app.use(express.json())

require('dotenv').config();
const dbConnect = require('./dbConnect');

const port = 3001 || process.env.port
app.listen(port, () => {
    console.log(`backend server running on port ${port}`)
})