import React from "react";
import GenreList from '../GenreList/index';

export default function Main({children}) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 blog-sidebar">
                        <h4>Жанры</h4>
                        <GenreList/>
                    </div>
                    <div className="col-sm-9">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}