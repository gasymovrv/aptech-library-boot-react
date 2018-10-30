import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
                                <Route exact path="/" component={BookList}/>

                                <Route exact path="/authors" component={AuthorList}/>

                                <Route path="/authors/:id/edit"
                                       component={(props) => (<AuthorForm {...props} isEdit={true}/>)}/>

                                <Route path="/authors/add" component={AuthorForm}/>

                                <Route path="/books/:id" component={(props) => (<BookInfo {...props}/>)}/>

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
