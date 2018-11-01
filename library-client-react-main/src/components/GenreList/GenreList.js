import React from "react";


export default function GenreList({entityList}) {
    let genres = entityList.map(g =>
        <li key={g.id}><a className="genre-link" href="#" id={g.id}>{g.name}</a></li>
    );
    return (
        <div className="col-sm-3 blog-sidebar">
            <h4>Жанры</h4>
            <ul className="blog-categories">{genres}</ul>
        </div>
    )
}