import React from 'react';
import Watch from '../Watch';
import logo from '../../img/BeSmart-logo.svg' // relative path to image
import {Link} from 'react-router-dom';

export default function Header({watchText, isActiveWatch, onToggleWatch, appPaths, user}) {
    let authInfo;
    if(user){
        authInfo = (
            <ul>
                <li>Добро пожаловать, {user.name} {user.lastName}!</li>
                <li>
                    <i className='glyphicon glyphicon-log-out icon-white'/>
                    <a href={appPaths.logout}> Выйти</a>
                </li>
            </ul>
        );
    } else {
        authInfo = (
            <ul>
                <li>
                    <i className='glyphicon glyphicon-user icon-white'/>
                    <a href={appPaths.registration}>Авторизация</a>
                </li>
            </ul>
        );
    }
    return (
        <div className='mainmenu-wrapper'>
            <div className='container'>
                <Watch isActive={isActiveWatch} watchText={watchText} onToggleWatch={onToggleWatch}/>
                <div className='menuextras'>
                    <div className='extras'>
                            {authInfo}
                    </div>
                </div>
                <nav id='mainmenu' className='mainmenu'>
                    <ul>
                        <li className='logo-wrapper'>
                            <Link to={appPaths.root}><img src={logo} alt='Изображение не найдено'/></Link>
                        </li>
                        <li>
                            <Link to={appPaths.books}>Все книги</Link>
                        </li>
                        <li>
                            <Link to={appPaths.authors}>Авторы</Link>
                        </li>
                        <li>
                            <Link to={appPaths.aboutUs}>О нас</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
