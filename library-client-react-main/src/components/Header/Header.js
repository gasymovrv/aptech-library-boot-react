import React from 'react';
import Watch from "../Watch";
import logo from '../../img/BeSmart-logo.svg' // relative path to image
import {Link} from "react-router-dom";

export default function Header({watchText, isActiveWatch, onToggleWatch, paths}) {
    return (
        <div className="mainmenu-wrapper">
            <div className="container">
                <Watch isActive={isActiveWatch} watchText={watchText} onToggleWatch={onToggleWatch}/>
                <div className="menuextras">
                    <div className="extras">
                        <ul>
                            <li>
                                <i className="glyphicon glyphicon-user icon-white"/>
                                <Link to={paths.auth}>Авторизация</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav id="mainmenu" className="mainmenu">
                    <ul>
                        <li className="logo-wrapper">
                            <Link to={paths.root}><img src={logo} alt="Изображение не найдено"/></Link>
                        </li>
                        <li>
                            <Link to={paths.books}>Все книги</Link>
                        </li>
                        <li>
                            <Link to={paths.authors}>Авторы</Link>
                        </li>
                        <li>
                            <Link to={paths.aboutUs}>О нас</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
