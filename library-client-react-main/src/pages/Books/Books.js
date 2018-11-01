import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Top from "../../components/Top";
import Letters from "../../components/Letters";
import BookList from '../../components/books/BookList';
import GenreList from "../../components/GenreList";
import NotFound from "../../components/NotFound";
import BookInfo from "../../components/books/BookInfo";

export default function Books({match}) {
    const url = match.url;
    return (
        <Fragment>
            <Switch>
                <Route exact path={url} component={(props) => (<Top {...props} text="Список книг"/>)}/>
                <Route path={`${url}/:id`} component={(props) => (<Top {...props} text="Информация о книге"/>)}/>
            </Switch>
            <Route exact path={url} component={Letters}/>
            <div className="section">
                <div className="container">
                    <div className="row flex-center">
                        <Route exact path={url} component={GenreList}/>
                        <Switch>
                            <Route exact path={url} component={BookList}/>
                            <Route path={`${url}/:id`} component={BookInfo}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
