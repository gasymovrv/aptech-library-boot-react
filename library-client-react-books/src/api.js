
export default class Api{
    listeners = [];

    broadcast = (items) => {
        this.listeners.map(listener => {
            listener(items);
        });
    };

    constructor(){
        fetch('http://localhost:8080/books/findAll')
            .then(r => r.json())
            .then(booksResponse => {
                this.broadcast(booksResponse);
            });
    }

    subscribe = (fn) => {
        this.listeners.push(fn);
    };

    unsubscribe = (fn) => {
        this.listeners.splice(this.listeners.indexOf(fn), 1);
    }
}

