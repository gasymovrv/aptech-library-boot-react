const _path = 'http://localhost:8080';

export function findAllBooks(fn) {
    return fetch(`${_path}/books/findAll`)
        .then(r => r.json())
        .then(booksResponse => fn(booksResponse));
}

export function findBooksWithPaging(fn, page, size) {
    return fetch(`${_path}/books/findAll/${page - 1}/${size}`)
        .then(r => r.json())
        .then(booksPageResponse => fn(booksPageResponse.content, booksPageResponse.totalElements));
}

export function findBookById(fn, id) {
    return fetch(`${_path}/books/findById/${id}`)
        .then(r => r.json())
        .then(bookResponse => fn(bookResponse));
}


