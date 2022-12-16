const { getByIsbn, get, getAll, save, getCsv } = require('../controllers/books-magazines')

module.exports = (router) => {
    router.get('/books-magazines', getAll)
    router.get('/books-magazines/:isbn/find', getByIsbn)
    router.get('/books-magazines/find', get)
    router.post('/books-magazines', save)
    router.get('/books-magazines/get-csv', getCsv)
}