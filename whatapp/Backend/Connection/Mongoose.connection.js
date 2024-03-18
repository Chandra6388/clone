const mongoose = require('mongoose');
require('dotenv').config();


const URL = process.env.MONGO_URL
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("DB connection successfully connected");
});

mongoose.connection.on('error', (err) => {
    console.log("DB connection error:", err);
});
