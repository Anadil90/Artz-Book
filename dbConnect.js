const mongoose = require('mongoose');

mongoose.connect((process.env.MONGO_URL));
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('connected to DB')
})

connection.on('error', (error) => {
    console.log('unable to connect to DB', error)
})

module.exports = mongoose;