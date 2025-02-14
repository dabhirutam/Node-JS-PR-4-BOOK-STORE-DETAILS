const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/dbConfig');
const routes = require('./routes/transaction');
const path = require('path');

const app = express();
const port = 3004;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/', routes);

app.listen(port, err => {
    !err && console.log("Server is running in port :- ",port);
});