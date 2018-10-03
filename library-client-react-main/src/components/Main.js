import React from "react";
import BookList from './books/BookList';
import GenreList from './genres/GenreList';

class Main extends React.Component{

    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 blog-sidebar">
                            <h4>Жанры</h4>
                            <GenreList/>
                        </div>
                        <div className="col-sm-9">
                            <BookList/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;