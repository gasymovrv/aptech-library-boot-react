import React from 'react';
import {getLocalCurrentUser, loginUser, setLocalCurrentUser} from '../../../api/usersApi';
import InfoBox from '../../InfoBox/InfoBox';
import {consoleLogObject} from '../../../helpers/consoleLog';
// import {Link} from 'react-router-dom';

export default class Login extends React.Component{
    state = {
        email: '',
        password: '',
        successSubmit: undefined,
        showInfo: false
    };

    //Используем async - ждем пока завершится промис из loginUser
    submitHandler = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        const {appPaths, history} = this.props;
        const isExistUser = !!getLocalCurrentUser();
        if(isExistUser){
            history.push(appPaths.auth.account)
        }
        loginUser(email, password)
            .then((resp) => {
                if (resp.status !== 200) {
                    consoleLogObject('resp error', resp, this);
                    this.setState({
                        successSubmit: false,
                        showInfo: true
                    });
                    return null;
                } else {
                    consoleLogObject('resp success', resp, this);
                    return resp.json();
                }
            })
            .then((respUser) => {
                if (respUser) {
                    consoleLogObject('respUser success', respUser, this);
                    this.setState({
                        email:'',
                        password:'',
                    });
                    setLocalCurrentUser(respUser);
                    history.replace({
                        pathname: appPaths.auth.account,
                        state: {
                            successSubmit: true,
                            showInfo: true
                        }
                    });
                }
            });

    };

    changeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    callbackStopShow = () => {
        this.setState({showInfo: false})
    };

    render() {
        const {email, password, successSubmit, showInfo} = this.state;
        return (
            <div className='col-sm-5'>
                <InfoBox infoKey='login-info'
                         successAction={successSubmit}
                         errorText='Неверный логин или пароль!'
                         timeout={7}
                         show={showInfo}
                         callbackStopShow={this.callbackStopShow}
                />
                <div className='basic-login'>
                    <form name='form_login' onSubmit={this.submitHandler}>
                        <div className='form-group'>
                            <label htmlFor='login-username'><i className='icon-user'/> <b>email</b></label>
                            <input className='form-control'
                                   id='login-username'
                                   type='text'
                                   name='email'
                                   value={email}
                                   onChange={this.changeHandler}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='login-password'><i className='icon-lock'/> <b>Пароль</b></label>
                            <input className='form-control'
                                   id='login-password'
                                   name='password'
                                   type='password'
                                   value={password}
                                   onChange={this.changeHandler}/>
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn pull-right'>Войти</button>
                            <div className='clearfix'/>
                        </div>
                    </form>
                    {/*<div className="not-member">*/}
                    {/*<p>Еще нет аккаунта? <a href="${contextPath}users/registrationView">Зарегистрируйтесь здесь</a></p>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}
