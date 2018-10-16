import React from "react";
import Book from "./Book";
import withPagingEntities from "../../hocs/withPagingEntities";
import {findBooksWithPaging} from "../../api/booksApi";

function BookList({data:bookList}) {
    let books = bookList.map(b =>
        <Book key={b.id} book={b}/>
    );
    return (<div className="row">{books}</div>)
}

export default withPagingEntities(BookList, findBooksWithPaging)