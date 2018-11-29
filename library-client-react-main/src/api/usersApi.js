import {consoleLogWithContext} from '../helpers/consoleLog';

export function createNewUser(user) {
    let options = {
        method: 'GET',//тип запроса
        headers: {
            'Content-Type': 'application/json', //отправляемый тип
            'Accept': 'application/json', //принимаемый тип (из контроллера)
        },
        body: JSON.stringify(user)
    };
    return fetch('/users/registration', options);
}

export function loginUser(email, password) {
    let options = {
        method: 'GET',//тип запроса
        headers: {
            'Content-Type': 'application/json', //отправляемый тип
            'Accept': 'application/json', //принимаемый тип (из контроллера)
            'Authorization': 'Basic ' + window.btoa(email + ':' + password)
        },
    };
    return fetch('/users/login', options)
}

export function logoutUser() {
    return fetch('/users/logout');
}

export function getLocalCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function setLocalCurrentUser(user) {
    if (user == null) {
        localStorage.setItem('user', null);
    } else {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

/**
 * Проверяем авторизацию для случая,
 * если на клиент объект user имеется
 * а на сервере он не авторизован
 */
export function checkAuthorization() {
    userIsAuthorize(respResult => {
        if (!respResult) {
            consoleLogWithContext('respResult', respResult, this);
            setLocalCurrentUser(null);
            logoutUser();
        }
    });
}


function userIsAuthorize(fn) {
    const user = getLocalCurrentUser();
    if (user) {
        fetch(`/users/userIsAuthorize?email=${user.email}`)
            .then(r => r.json()).then((respResult=>fn(respResult)))
    }
}


//
// export async function userIsAuthorize() {
//     const user = getLocalCurrentUser();
//     let result = false;
//     if (user) {
//         await fetch(`/users/userIsAuthorize?email=${user.email}`)
//             .then(r => r.json())
//             .then(respResult => result = respResult);
//     }
//     return result;
// }

export function isAdmin() {
    return findRole('ADMIN');
}

export function isAuthorizeUser() {
    return findRole('ROLE_USER');
}

function findRole(role) {
    let result = false;
    let user = getLocalCurrentUser();
    if (user) {
        if (user.roles) {
            user.roles.forEach((elem) => {
                if (elem.role === role) result = true;
            })
        }
    }
    return result;
}


