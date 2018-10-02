import React from "react";
import Book from "./Book";
import {Row} from "reactstrap";

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
        return (<Row>{books}</Row>)
    }
}

export default BookList;