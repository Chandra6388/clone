const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const mongooseConnection = require('./Connection/Mongoose.connection');
require('dotenv').config();
const Routes = require('./route/routes')
const bodyparser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
 
app.use(cors())

app.use('/', Routes)
server.listen(port, () => {
    console.log(`server is running at port number ${port}`);
});
