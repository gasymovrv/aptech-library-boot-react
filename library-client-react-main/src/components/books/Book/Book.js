import React from "react";
import {Link} from "react-router-dom";

export default function Book({book, url}) {
    const imgPath = `data:image/jpeg;base64,${book.image}`;
    return (
        <div className="col-sm-4">
            <div className="shop-item">

                <div className="image">
                    <Link to={{
                        pathname: `${url}books/${book.id}`,
                        book: {...book}
                    }}>
                        <img className="img-rounded" src={imgPath}/>
                    </Link>
                </div>

                <div className="title">
                    <h3>
                        <Link to={{
                            pathname: `${url}books/${book.id}`,
                            book: {...book}
                        }}>
                            {book.id}
                        </Link>
                    </h3>
                </div>

                <div className="title">
                    <h3>
                        <Link to={{
                            pathname: `${url}books/${book.id}`,
                            book: {...book}
                        }}>
                            {book.name}
                            </Link>
                    </h3>
                </div>

                <div className="title">
                    <h3>
                        <Link to={`${url}authors/${book.author.id}`}>
                            {book.author.fio}
                        </Link>
                    </h3>
                </div>

            </div>
        </div>
    )
}