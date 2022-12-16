const router = require('express').Router();

const booksAndMagazines = require('./books-and-magazines')

booksAndMagazines(router);

module.exports = router