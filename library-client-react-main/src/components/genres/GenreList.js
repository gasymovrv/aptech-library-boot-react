import React from "react";


export default class GenreList extends React.Component{

    state = {
        genreList: [{id:-1, name:"неизвестно"}]
    };

    componentDidMount(){
        fetch('http://localhost:8080/genres/findAll')
            .then(response => response.json())
            .then(data => this.setState({genreList: data}));
    }

    render() {
        let genres = this.state.genreList.map(g =>
            <li key={g.id}><a className="genre-link" href="#" id={g.id}>{g.name}</a></li>
        );
        return (<ul className="blog-categories">{genres}</ul>)
    }
}