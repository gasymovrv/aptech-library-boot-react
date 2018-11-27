import React, {Fragment} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Books from './pages/Books';
import Authors from './pages/Authors';
import NotFound from './components/NotFound';
import Top from './components/Top';
import MainContainer from './components/MainContainer';
import Auth from './pages/Auth';

export default function App() {
    const appPaths = {
        root: '/',
        authors: '/authors',
        books: '/books',
        aboutUs: '/about-us',
        login:'/login',
        registration:'/registration',
    };

    return (
        <BrowserRouter>
            <Fragment>
                <Route path={appPaths.root} component={(props) => <Header {...props} appPaths={appPaths}/>}/>
                <Switch>
                    <Redirect exact from={appPaths.root} to={appPaths.books}/>
                    <Route path={appPaths.authors} component={(props) => <Authors {...props} appPaths={appPaths}/>}/>
                    <Route path={appPaths.books} component={(props) => <Books {...props} appPaths={appPaths}/>}/>
                    <Route path={appPaths.login} component={(props) => <Auth {...props} appPaths={appPaths}/>}/>
                    <Route path={appPaths.registration} component={(props) => <Auth {...props} appPaths={appPaths}/>}/>
                    <Route component={() =>
                        <Fragment>
                            <Top text='Неизвестная страница'/>
                            <MainContainer>
                                <NotFound/>
                            </MainContainer>
                        </Fragment>
                    }/>
                </Switch>
                <Route path={appPaths.root} component={(props) => <Footer {...props} appPaths={appPaths}/>}/>
            </Fragment>
        </BrowserRouter>
    )
}
