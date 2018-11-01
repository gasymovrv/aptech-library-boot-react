import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Top from "../../components/Top";
import AuthorList from "../../components/authors/AuthorList";
import AuthorForm from "../../components/authors/AuthorForm";
import NotFound from "../../components/NotFound";
import AuthorInfo from "../../components/authors/AuthorInfo";

export default function Authors({match}) {
    const url = match.url;
    return (
        <Fragment>
            <Switch>
                <Route exact path={url} component={(props) => (<Top {...props} text="Список авторов"/>)}/>
                <Route path={`${url}/add`} component={(props) => (<Top {...props} text="Добавление нового автора"/>)}/>
                <Route path={`${url}/:id/edit`} component={(props) => (<Top {...props} text="Изменении информации об авторе"/>)}/>
                <Route path={`${url}/:id`} component={(props) => (<Top {...props} text="Информация об авторе"/>)}/>
            </Switch>
            <div className="section">
                <div className="container">
                    <div className="row flex-center">
                        <Switch>
                            <Route exact path={url} component={AuthorList}/>
                            <Route path={`${url}/add`} component={AuthorForm}/>
                            <Route path={`${url}/:id/edit`} component={(props) => (<AuthorForm {...props} isEdit={true}/>)}/>
                            <Route path={`${url}/:id`} component={AuthorInfo}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
