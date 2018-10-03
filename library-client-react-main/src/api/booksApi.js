
export default class BooksApi{

    _path = 'http://localhost:8080';

    findAll(fn){
        fetch(`${this._path}/books/findAll`)
            .then(r => r.json())
            .then(booksResponse => {
                fn(booksResponse)
            });
    }

    findAllWithPaging(fn, page, size){
        fetch(`${this._path}/books/findAll/${page-1}/${size}`)
            .then(r => r.json())
            .then(booksPageResponse => {
                fn(booksPageResponse.content, booksPageResponse.totalElements);
            });
    }
}

