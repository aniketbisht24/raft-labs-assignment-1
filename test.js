const chai = require('chai');
const server = require('./server');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;
const BooksAndMagazine = require('./controllers/books-magazines')

describe('Books And Magazine', () => {
    let mockNomineeService;

    context('save function testing', () => {
        it('save function should exists', () => {
            expect(BooksAndMagazine.save).to.be.exist;
        })
    });

    context('getByIsbn function testing', async () => {
        let statusRes;

        let bodyRes;

        before(async () => {
            const { status, body, header } = await chai.request(server)
                .get('/books-magazines/somethingRandom/find')

            statusRes = status;
            bodyRes = body;
        });

        it('getByIsbn function should exists', () => {
            expect(BooksAndMagazine.getByIsbn).to.be.exist;
        })

        it('should return 201 status if records fetch successfully', () => {
            expect(statusRes).to.equal(201);
        });

        it('should return an array', () => {
            expect(bodyRes.doc).to.be.an('array');
        });

        it('should return array if records fetch successfully', () => {
            expect(bodyRes.doc).to.be.an('array');
        });

        it('should return `doc` keys in body', () => {
            expect(bodyRes).to.contain.keys('doc');
        });
    })

    context('get function testing', async() => {
        let statusRes;

        let bodyRes;

        before(async () => {
            const { status, body, header } = await chai.request(server)
                .get('/books-magazines/find')

            statusRes = status;
            bodyRes = body;
        });

        it('get function should exists', () => {
            expect(BooksAndMagazine.get).to.be.exist;
        })

        it('should return 201 status if records fetch successfully', () => {
            expect(statusRes).to.equal(201);
        });

        it('should return an array', () => {
            expect(bodyRes.doc).to.be.an('array');
        });

        it('should return array if records fetch successfully', () => {
            expect(bodyRes.doc).to.be.an('array');
        });

        it('should return `doc` keys in body', () => {
            expect(bodyRes).to.contain.keys('doc');
        });
    });

    context('getAll function testing', async() => {

        let statusRes;

        let bodyRes;

        before(async () => {
            const { status, body, header } = await chai.request(server)
                .get('/books-magazines')

            statusRes = status;
            bodyRes = body;
        });

        it('getAll function should exists', () => {
            expect(BooksAndMagazine.getAll).to.be.exist;
        })
        
        it('should return 201 status if records fetch successfully', () => {
            expect(statusRes).to.equal(201);
        });

        it('should return an array', () => {
            expect(bodyRes.doc).to.be.an('array');
        });

        it('should return array if records fetch successfully', () => {
            expect(bodyRes.doc).to.be.an('array');
        });

        it('should return `doc` keys in body', () => {
            expect(bodyRes).to.contain.keys('doc');
        });
    });

    context('getCsv function testing', async() => {
        it('getCsv function should exists', () => {
            expect(BooksAndMagazine.getCsv).to.be.exist;
        })
    });
});
