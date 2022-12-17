const { getByIsbn, get, getAll, save, getCsv } = require('../controllers/books-magazines')

module.exports = (router) => {
    router.get('/books-magazines', getAll)
    router.get('/books-magazines/:isbn/find', getByIsbn)
    router.get('/books-magazines/find', get)
    router.get('/books-magazines/get-csv', getCsv)
    router.post('/books-magazines', save)
}