import React from "react";
import Book from "./Book";
import withPagination from "../../hocs/withPagination";
import {findBooksWithPaging} from "../../api/booksApi";

function BookList({data:bookList}) {
    let books = bookList.map(b =>
        <Book key={b.id} book={b}/>
    );
    return (<div className="row">{books}</div>)
}

export default withPagination(BookList, findBooksWithPaging)