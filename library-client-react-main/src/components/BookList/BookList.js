import React from "react";
import Book from "../Book";

export default function BookList({data:bookList}) {
    let books = bookList.map(b =>
        <Book key={b.id} book={b}/>
    );
    return (<div className="row">{books}</div>)
}