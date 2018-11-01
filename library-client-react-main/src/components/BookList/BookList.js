import React from "react";
import Book from "../Book";

export default function BookList({entityList, children}) {
    let books = entityList.map(b =>
        <Book key={b.id} book={b}/>
    );
    return (
        <div className="col-sm-9">
            <div className="row">{books}</div>
            <div className="row flex-center">{children}</div>
        </div>
    );
}