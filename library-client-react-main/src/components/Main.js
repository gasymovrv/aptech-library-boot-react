import React from "react";
import GenreList from './genres/GenreList';

export default class Main extends React.Component {

    render() {
        const {component} = this.props;
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
}