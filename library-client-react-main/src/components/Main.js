import React from "react";
import GenreList from './GenreList';

export default function Main({component}) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 blog-sidebar">
                        <h4>Жанры</h4>
                        <GenreList/>
                    </div>
                    <div className="col-sm-9">
                        {component}
                    </div>
                </div>
            </div>
        </div>
    )
}