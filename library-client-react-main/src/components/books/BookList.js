import React from "react";
import Book from "./Book";

class BookList extends React.Component{

    state = {
        bookList: []
    };

    //срабатывает после появления текущего компонента в DOM
    componentDidMount(){
        fetch('http://localhost:8080/books/findAll')
            .then(response => response.json())
            .then(data => this.setState({bookList: data}));
    }

    render() {
        let books = this.state.bookList.map(b =>
            <Book key={b.id} book={b}/>
        );
        return (<div className="row">{books}</div>)
    }
}

export default BookList;