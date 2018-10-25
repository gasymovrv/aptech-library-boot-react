import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "../Header";
import Top from "../Top";
import Letters from "../Letters";
import Main from "../Main";
import Footer from "../Footer";
import BookList from '../BookList/index';
import AuthorList from "../AuthorList/index";
import AuthorForm from "../AuthorForm/index";

export default function App() {
    return (
        <Router>
            <Fragment>
                <Header/>
                <Top/>
                <Letters/>
                <Main>
                    <Switch>
                        <Route exact path="/" component={BookList}/>
                        <Route exact path="/authors" component={AuthorList}/>}/>
                        <Route path="/authors/edit-form/:id"
                               component={({match}) => (<AuthorForm isEdit={true} match={match}/>)}/>}/>
                        <Route path="/authors/add-form" component={AuthorForm}/>
                        <Route path="/authors/delete/:id" component={AuthorList}/>
                        {/*<Route path="/" render={()=><AuthorList num="2" someProp={100}/>}/>*/}
                        {/*<Route path="/" render={()=><AuthorList num="2" someProp={100}/>}/>*/}
                        {/*<Route path="/profile" component={Profile} />*/}
                        {/*<Route path="/wallets" component={Wallets} />*/}
                    </Switch>
                </Main>
                <Footer/>
            </Fragment>
        </Router>
    )
}
