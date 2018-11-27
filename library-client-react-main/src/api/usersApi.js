import {consoleLog, consoleLogObject, consoleLogWithText} from '../helpers/consoleLog';

export function createNewUser(fn) {
    return fetch('/users/registration')
        .then(r => r.json())
        .then(userResponse => fn(userResponse));
}

export function loginUser(user, fn) {
    let options = {
        method: 'POST',//тип запроса
        headers: {
            'Content-Type': 'application/json', //отправляемый тип
            'Accept': 'application/json' //принимаемый тип (из контроллера)
        },
        body: JSON.stringify(user)//отправляемое отсюда (Request)
    };
    return fetch('/users/login', options)
        .then(r => r.json())
        .then(userResponse => fn(userResponse));
}

export function logoutUser() {
    return fetch('/users/logout')
}

export function getCurrentUser(fn) {
    return fetch('/users/getCurrentUser')
        .then(r => r.json())
        .then(userResponse => fn(userResponse));
}

export function isAdmin() {
    return findRole('ADMIN');
}

export function isAuthorizeUser() {
    return findRole('USER');
}

function findRole(role) {
    let result = false;
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (user) {
        if (user.roles) {
            user.roles.forEach((elem) => {
                if (elem.role === role) result = true;
            })
        }
    }
    return result;
}


