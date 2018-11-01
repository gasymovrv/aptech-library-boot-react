const _path = 'http://localhost:8080';

export function findAllGenres(fn) {
    return fetch(`${_path}/genres/findAll`)
        .then(r => r.json())
        .then(genresResponse => fn(genresResponse));
}


