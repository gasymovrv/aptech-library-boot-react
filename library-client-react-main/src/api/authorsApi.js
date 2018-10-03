
export default class BooksApi{

    _path = 'http://localhost:8080';

    findAll(fn){
        fetch(`${this._path}/authors/findAll`)
            .then(r => r.json())
            .then(booksResponse => {
                fn(booksResponse)
            });
    }

    findAllWithPaging(fn, page, size){
        fetch(`${this._path}/authors/findAll/${page-1}/${size}`)
            .then(r => r.json())
            .then(authorsPageResponse => {
                fn(authorsPageResponse.content, authorsPageResponse.totalElements);
            });
    }
}

