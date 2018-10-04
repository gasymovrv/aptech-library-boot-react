
export default class AuthorsApi{

    _path = 'http://localhost:8080';

    findAll(fn){
        fetch(`${this._path}/authors/findAll`)
            .then(r => r.json())
            .then(authorsResponse => {
                fn(authorsResponse)
            });
    }

    findAllWithPaging(fn, page, size){
        fetch(`${this._path}/authors/findAll/${page-1}/${size}`)
            .then(r => r.json())
            .then(authorsPageResponse => {
                fn(authorsPageResponse.content, authorsPageResponse.totalElements);
            });
    }

    findById(fn, id){
        fetch(`${this._path}/authors/findById/${id}`)
            .then(r => r.json())
            .then(authorResponse => {
                 fn(authorResponse)
            });
    }

    saveOrUpdate(author, okFn, errFn){
        let options = {
            method: 'POST',//тип запроса
            headers: {
                'Content-Type': 'application/json', //отправляемый тип
                'Accept': 'application/json' //принимаемый тип (из контроллера)
            },
            body: JSON.stringify(author)//отправляемое отсюда (Request)
        };
        return fetch(`${this._path}/authors/save`, options)
            .then((response) => {
                if(response.status === 200){
                    okFn();
                } else {
                    console.log(response);
                    errFn();
                }
            })
            .catch((err) => {
                console.log(err);
                errFn();
            });
    }

    deleteById(id, okFn, errFn){
        return fetch(`${this._path}/authors/deleteById/${id}`, {method: 'DELETE'})
            .then((response) => {
                if(response.status === 200){
                    okFn();
                } else {
                    console.log(response);
                    errFn();
                }
            })
            .catch((err) => {
                console.log(err);
                errFn();
            });
    }


}

