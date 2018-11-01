import React, {Fragment} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Books from "./pages/Books";
import Authors from "./pages/Authors";

export default function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Route path="/" component={Header}/>
                <Switch>
                    <Redirect exact from='/' to='/books'/>
                    <Route path="/authors" component={Authors}/>
                    <Route path="/books" component={Books}/>
                </Switch>
                <Route path="/" component={Footer}/>
            </Fragment>
        </BrowserRouter>
    )
}
