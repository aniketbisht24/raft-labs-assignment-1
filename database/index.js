
const path = require('path');
const csv = require('csvtojson')

global.authors = [];

global.booksAndMagazines = [];

const loadAuthors = async () => csv().fromFile(path.join(__dirname, '../utils/authors.csv'));
const loadBooks =  async () => csv().fromFile(path.join(__dirname, '../utils/books.csv'));
const loadMagazines = async () => csv().fromFile(path.join(__dirname, '../utils/magazines.csv'));

const mapCsvData = (records, data) => {
    records.forEach((record) => {
        const keys = Object.keys(record)[0].split(';')

        const values = Object.values(record)[0].split(';')

        const savedRecords = {};

        for (let iter = 0; iter < keys.length; iter++) {
            savedRecords[keys[iter]] = values[iter];

        }

        savedRecords['id'] = data.length + 1;

        data.push(savedRecords);
    })
}

const seedData = async () => {

    const authorsRecords = await loadAuthors();

    const booksRecords = await loadBooks();

    const magazinesRecords = await loadMagazines();

    mapCsvData(authorsRecords, authors);
    mapCsvData(booksRecords, booksAndMagazines);
    mapCsvData(magazinesRecords, booksAndMagazines);

}

seedData();