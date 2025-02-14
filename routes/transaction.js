const express = require('express');
const { Home, Add, AddBook, Edit, UpdateBook, Delete } = require('../controllers/transactionController');
const routes = express.Router();

// Page Redner Routes
routes.get('/', Home);
routes.get('/add', Add);
routes.get('/edit/:_id', Edit);
routes.get('/delete/:_id', Delete);

// Form Submit Routes
routes.post('/addBook', AddBook);
routes.post('/updateBook', UpdateBook);

module.exports = routes;