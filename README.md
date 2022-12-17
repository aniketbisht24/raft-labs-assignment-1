# raft-labs-assignment-1

### Deployed At -> [Live Demo](https://raft-labs-assignment-1-three.vercel.app/)

### Tech stacks used :
To create this clone following Tech stack is used by contributors.
*   **Express**
*   **Node.js**
*   **CSS**
*   **dotenv**
*   **chai**
*   **mocha**
*   **chai-http**
*   **fs**
*   **json2csv**
*   **csvtojson**
    
<hr/>

## Sneak Peak
#### Landing Page:
<img src="https://i.imgur.com/SoB8Upy.png" />

# Assignment Requirements
1. Write software that reads the CSV data (of books, magazines, and authors) given on
the next page.
2. Print out all books and magazines (on either console UI) with all their details (with a
meaningful output format).
3. Find a book or magazine by its ISBN.
4. Find all books and magazines by their authors’ email.
5. Print out all books and magazines with all their details sorted by title. This sort
should be done for books and magazines together.
6. Add a book and a magazine to the data structure of your software and export it to a
new CSV file.
7. Unit tests for the methods


# DOCS TO USE API

### REGISTER


    router.get('/books-magazines', getAll)
    router.get('/books-magazines/:isbn/find', getByIsbn)
    router.get('/books-magazines/find', get)
    router.post('/books-magazines', save)
    router.get('/books-magazines/get-csv', getCsv)
    
    
### getAll Books and Magazines
GET URL - `/books-magazines`

---

### get Books and Magazines by ISBN

GET URL - `/books-magazines/:isbn/find`

### GET Books and Magazines by author

GET URL - `/books-magazines/find`

BODY

```json
{
  "authors": "author@gmail.com",
}
```


### GET csv of books and magazines

GET URL - `/books-magazines/get-csv`

### Save books or magazines

POST URL - `/books-magazines`

BODY

```json
{
  "authors": "author@gmail.com",
  "title": "Cooking for gourmets",
  "isbn": "2365-5632-7854",
  "authors": "walter@echocat.org",
  "publishedAt": "21.05.2011",
  "description": "this is description"
  "Beautiful cooking",
}
```
