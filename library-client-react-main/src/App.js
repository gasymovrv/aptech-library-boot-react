import React, {Fragment} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import NotFound from "./components/NotFound";
import Top from "./components/Top";
import MainContainer from "./components/MainContainer";

export default function App() {
    const paths = {
        root: '/',
        authors: '/authors',
        books: '/books',
        aboutUs: '/about-us',
        auth: '/auth',
    };

    return (
        <BrowserRouter>
            <Fragment>
                <Route path={paths.root} component={(props) => <Header {...props} paths={paths}/>}/>
                <Switch>
                    <Redirect exact from={paths.root} to={paths.books}/>
                    <Route path={paths.authors} component={Authors}/>
                    <Route path={paths.books} component={Books}/>
                    <Route component={() =>
                        <Fragment>
                            <Top text="Неизвестная страница"/>
                            <MainContainer>
                                <NotFound/>
                            </MainContainer>
                        </Fragment>
                    }/>
                </Switch>
                <Route path={paths.root} component={(props) => <Footer {...props} paths={paths}/>}/>
            </Fragment>
        </BrowserRouter>
    )
}
