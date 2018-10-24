import React from "react";


export default function GenreList({data}) {
    let genres = data.map(g =>
        <li key={g.id}><a className="genre-link" href="#" id={g.id}>{g.name}</a></li>
    );
    return (<ul className="blog-categories">{genres}</ul>)
}