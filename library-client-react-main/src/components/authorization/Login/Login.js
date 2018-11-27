import React from 'react';
import {loginUser} from '../../../api/usersApi';
import InfoBox from '../../InfoBox/InfoBox';
import {consoleLogObject} from '../../../helpers/consoleLog';
// import {Link} from 'react-router-dom';

export default class Login extends React.Component{
    state = {
        id: null,
        email: '',
        password: null,
        name: null,
        lastName: null,
        active: null,
        roles: null,
        successSubmit: undefined
    };

    submitHandler = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        let user = {};
        user.email = email;
        user.password = password;
        loginUser(user, (respUser) => {
            if (respUser) {
                consoleLogObject('respUser', respUser, this);
                this.setState({
                    ...respUser,
                    successSubmit: true
                });
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                respUser.authdata = window.btoa(email + ':' + password);
                localStorage.setItem('user', JSON.stringify(respUser));
            } else {
                this.setState({successSubmit: false})
            }
        });
    };

    changeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    // const url = props.match.url;
    render() {
        const {email, successSubmit} = this.state;
        return (
            <div className='col-sm-5'>
                <InfoBox infoKey={email}
                         successAction={successSubmit}
                         errorText='Неверный логин или пароль!'
                         successText='Вы успешно авторизовались!'
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
