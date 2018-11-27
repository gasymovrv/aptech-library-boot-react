export function getCurrentUser(fn) {
    return fetch(`/getCurrentUser`)
        .then(r => r.json())
        .then(userResponse => fn(userResponse));
}


