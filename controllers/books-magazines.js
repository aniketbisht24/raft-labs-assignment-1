const { Parser } = require('json2csv')
const fs = require('fs')

const getByIsbn = (req, res) => {
    try {
        const { params: { isbn } } = req

        const doc = booksAndMagazines.filter((result) => {
            const { isbn: savedIsbn } = result;

            if (savedIsbn === isbn) {
                return result;
            }
        })

        return res.status(201).json({ doc });
    }
    catch (err) {
        res.status(500).json({ errors: 'Internal Server Error' })
    }
}

const get = (req, res) => {
    try {
        const { body: { authors } } = req

        const doc = booksAndMagazines.filter((result) => {
            const { authors: savedAuthors } = result;

            if (savedAuthors === authors) {
                return result;
            }
        })

        return res.status(201).json({ doc });
    }
    catch (err) {
        res.status(500).json({ errors: 'Internal Server Error' })
    }
}

const getAll = (req, res) => {
    try {
        const result = booksAndMagazines.sort((iterator1, iterator2) => {
            if (iterator1.title < iterator2.title) {
                return -1;
            }

            if (iterator1.title > iterator2.title) {
                return 1;
            }

            return 0;
        })

        return res.status(201).json({ doc: result });
    }
    catch (err) {
        res.status(500).json({ errors: 'Internal Server Error' })
    }
}

const save = (req, res) => {
    try {
        const { body } = req;

        booksAndMagazines.push({ ...body, id: booksAndMagazines.length + 1 })

        return res.status(201).json({ doc: 'successfully saved' });
    }
    catch (err) {
        return res.status(500).json({ errors: 'Internal Server Error' })
    }
}

const getCsv = async(req, res) => {
    try {
        const jsonToCsvParser = new Parser();

        const csv = jsonToCsvParser.parse(booksAndMagazines);

        await fs.writeFile('./utils/booksAndMagazines.csv', csv, (err) => {
            if(err){
                throw({error: 'not able to convert to csv file'})
            }
        })

        res.attachment('../utils/booksAndMagazines.csv');

        return res.status(200).send(csv)

    }
    catch (error) {
        return res.status(500).json({ errors: 'Internal Server Error' })
    }
}

module.exports = {
    getByIsbn,
    get,
    getAll,
    save,
    getCsv
}