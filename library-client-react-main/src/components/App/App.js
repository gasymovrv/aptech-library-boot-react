import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "../Header";
import Top from "../Top";
import Letters from "../Letters";
import Footer from "../Footer";
import BookList from '../BookList';
import AuthorList from "../AuthorList";
import AuthorForm from "../AuthorForm";
import GenreList from "../GenreList";

export default function App() {
    return (
        <Router>
            <Fragment>
                <Header/>
                <Top/>
                <Route exact path="/" component={Letters}/>
                <div className="section">
                    <div className="container">
                        <div className="row flex-center">
                            <Route exact path="/" component={GenreList}/>
                            <Switch>
                                <Route exact path="/" component={BookList}/>
                                <Route exact path="/authors" component={AuthorList}/>}/>
                                <Route path="/authors/edit-form/:id"
                                       component={({match}) => (<AuthorForm isEdit={true} id={match.params.id}/>)}/>}/>
                                <Route path="/authors/add-form" component={AuthorForm}/>
                                <Route path="/authors/delete/:id" component={AuthorList}/>
                                {/*<Route path="/" render={()=><AuthorList num="2" someProp={100}/>}/>*/}
                                {/*<Route path="/" render={()=><AuthorList num="2" someProp={100}/>}/>*/}
                                {/*<Route path="/profile" component={Profile} />*/}
                                {/*<Route path="/wallets" component={Wallets} />*/}
                            </Switch>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        </Router>
    )
}
