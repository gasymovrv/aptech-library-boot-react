import React from "react";
import Book from "../Book";

export default function BookList({entityList, children, ...props}) {
    const url = props.match.url;
    let books = entityList.map(b =>
        <Book key={b.id} book={b} url={url}/>
    );
    return (
        <div className="col-sm-9">
            <div className="row">{books}</div>
            <div className="row flex-center">{children}</div>
        </div>
    );
}