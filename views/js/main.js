const showSpinner = () => {
    document.querySelector('.spinner').classList.add('show')
}

const removeSpinner = () => {
    document.querySelector('.spinner').classList.remove('show')
}

const getData = async (prompt, author) => {
    try {
        showSpinner();
        const response = await fetch('/books-magazines', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            removeSpinner();
            throw new Error('Data could not be loaded');
        }

        let { result: data } = await response.json();

        if(prompt || author){
            data = data.filter((result) => {
                const { isbn: savedIsbn, authors: savedAuthors } = result;
                
                if (savedIsbn.includes(prompt) && savedAuthors.includes(author)) {
                    return result;
                }
            })
        }

        const tableBody = document.querySelector('.table-body')

        tableBody.innerHTML = ""
        
        for(const {isbn, title, authors, publishedAt} of data){
            const rowElement = document.createElement('tr');

            const isbnElement = document.createElement('td');
            const titleElement = document.createElement('td');
            const authorsElement = document.createElement('td');
            const publishedAtElement = document.createElement('td');

            isbnElement.textContent = isbn;
            authorsElement.textContent = authors;
            titleElement.textContent = title;
            publishedAtElement.textContent = publishedAt;

            rowElement.appendChild(isbnElement)
            rowElement.appendChild(titleElement)
            rowElement.appendChild(authorsElement)
            rowElement.appendChild(publishedAtElement)

            tableBody.appendChild(rowElement)
        }

        removeSpinner();
    }
    catch (error) {
        document.querySelector('.msg').textContent = error
    }
}

const onSubmit = (e) => {
    e.preventDefault();
    document.querySelector('.msg').textContent = '';

    const prompt = document.querySelector('#prompt').value
    const author = document.querySelector('#author').value

    getData(prompt, author);
}

getData()

document.querySelector('#image-form').addEventListener('submit', onSubmit);

const downloadData = async() => {
    
    const res = await fetch('/books-magazines/get-csv', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    window.open(res.url, 'Downloading')
}