const _path = 'http://localhost:8080';

export function findAllAuthors(fn) {
    fetch(`${_path}/authors/findAll`)
        .then(r => r.json())
        .then(authorsResponse => {
            fn(authorsResponse)
        });
}

export function findAuthorsWithPaging(fn, page, size) {
    fetch(`${_path}/authors/findAll/${page - 1}/${size}`)
        .then(r => r.json())
        .then(authorsPageResponse => {
            fn(authorsPageResponse.content, authorsPageResponse.totalElements);
        });
}

export function findAuthorById(fn, id) {
    fetch(`${_path}/authors/findById/${id}`)
        .then(r => r.json())
        .then(authorResponse => {
            fn(authorResponse)
        });
}

export function saveOrUpdateAuthor(author, okFn, errFn) {
    let options = {
        method: 'POST',//тип запроса
        headers: {
            'Content-Type': 'application/json', //отправляемый тип
            'Accept': 'application/json' //принимаемый тип (из контроллера)
        },
        body: JSON.stringify(author)//отправляемое отсюда (Request)
    };
    return fetch(`${_path}/authors/save`, options)
        .then((response) => {
            if (response.status === 200) {
                okFn("OK");
            } else {
                console.log(response);
                errFn("ERR");
            }
        })
        .catch((err) => {
            console.log(err);
            errFn();
        });
}

export function deleteAuthorById(id, okFn, errFn) {
    return fetch(`${_path}/authors/deleteById/${id}`, {method: 'DELETE'})
        .then((response) => {
            if (response.status === 200) {
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


