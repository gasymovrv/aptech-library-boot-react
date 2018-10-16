const _path = 'http://localhost:8080';

export function findAllBooks(fn) {
    fetch(`${_path}/books/findAll`)
        .then(r => r.json())
        .then(booksResponse => {
            fn(booksResponse)
        });
}

export function findBooksWithPaging(fn, page, size) {
    fetch(`${_path}/books/findAll/${page - 1}/${size}`)
        .then(r => r.json())
        .then(booksPageResponse => {
            fn(booksPageResponse.content, booksPageResponse.totalElements);
        });
}


