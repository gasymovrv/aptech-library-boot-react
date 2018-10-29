import React from "react";
import {Link} from "react-router-dom";

export default function Book({book, url}) {
    let imgPath = `data:image/jpeg;base64,${book.image}`;
    return (
        <div className="col-sm-4">
            <div className="shop-item">
                <div className="image"><Link to={`${url}books/${book.id}`}><img className="img-rounded" src={imgPath}/></Link></div>
                <div className="title"><h3><Link to={`${url}books/${book.id}`}>{book.id}</Link></h3></div>
                <div className="title"><h3><Link to={`${url}books/${book.id}`}>{book.name}</Link></h3></div>
                <div className="title"><h3><Link to={`${url}authors/${book.author.id}`}>{book.author.fio}</Link></h3></div>
            </div>
        </div>
    )
}