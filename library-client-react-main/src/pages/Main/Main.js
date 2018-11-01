import React, {Fragment} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Top from "../../components/Top/index";
import Letters from "../../components/Letters/index";
import BookList from '../../components/books/BookList/index';
import AuthorList from "../../components/authors/AuthorList/index";
import AuthorForm from "../../components/authors/AuthorForm/index";
import GenreList from "../../components/GenreList/index";
import NotFound from "../../components/NotFound";
import BookInfo from "../../components/books/BookInfo/index";
import AuthorInfo from "../../components/authors/AuthorInfo/index";

export default function Main() {
    return (
        <Fragment>
            <Route path="/" component={Top}/>
            <Route exact path="/" component={Letters}/>
            <div className="section">
                <div className="container">
                    <div className="row flex-center">
                        <Route exact path="/" component={GenreList}/>
                        <Switch>
                            <Redirect exact from='/books' to='/'/>

                            <Route exact path="/" component={BookList}/>

                            <Route path="/books/:id" component={(props) => (<BookInfo {...props}/>)}/>

                            <Route exact path="/authors" component={(props) => (<AuthorList {...props}/>)}/>

                            <Route path="/authors/add" component={AuthorForm}/>

                            <Route path="/authors/:id/edit"
                                   component={(props) => (<AuthorForm {...props} isEdit={true}/>)}/>

                            <Route path="/authors/:id" component={(props) => (<AuthorInfo {...props}/>)}/>

                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
