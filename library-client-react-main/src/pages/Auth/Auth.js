import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Top from '../../components/Top';
import NotFound from '../../components/NotFound';
import MainContainer from '../../components/MainContainer';
import Login from '../../components/authorization/Login';

export default function Auth({appPaths}) {
    // const url = match.url;
    return (
        <Fragment>
            <Switch>
                <Route exact path={appPaths.login} component={(props) => (<Top {...props} text='Авторизация'/>)}/>
                <Route exact path={appPaths.registration} component={(props) => (<Top {...props} text='Регистрация'/>)}/>
                <Route component={()=><Top text='Неизвестная страница'/>}/>
            </Switch>
            <MainContainer>
                <Switch>
                    <Route exact path={appPaths.login} component={(props) => (<Login {...props} appPaths={appPaths}/>)}/>
                    <Route component={NotFound}/>
                </Switch>
            </MainContainer>
        </Fragment>
    )
}
