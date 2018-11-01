import React, {Fragment} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Header from "../Header";
import Top from "../Top";
import Letters from "../Letters";
import Footer from "../Footer";
import BookList from '../books/BookList';
import AuthorList from "../authors/AuthorList";
import AuthorForm from "../authors/AuthorForm";
import GenreList from "../GenreList";
import NotFound from "../NotFound";
import BookInfo from "../books/BookInfo";
import AuthorInfo from "../authors/AuthorInfo";

export default function App() {
    return (
        <Router>
            <Fragment>
                <Route path="/" component={Header}/>
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

                                <Route path="/authors/:id/edit" component={(props) => (<AuthorForm {...props} isEdit={true}/>)}/>

                                <Route path="/authors/:id" component={(props) => (<AuthorInfo {...props}/>)}/>

                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
                <Route path="/" component={Footer}/>
            </Fragment>
        </Router>
    )
}
