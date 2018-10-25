import React from "react";
import Book from "../Book";

export default function BookList({entityList}) {
    let books = entityList.map(b =>
        <Book key={b.id} book={b}/>
    );
    return (<div className="row">{books}</div>)
}