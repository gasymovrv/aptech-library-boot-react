import React from 'react';
import Watch from "../Watch";
import logo from '../../img/BeSmart-logo.svg' // relative path to image
import {Link} from "react-router-dom";

export default function Header({watchText, isActiveWatch, onToggleWatch}) {
    return (
        <div className="mainmenu-wrapper">
            <div className="container">
                <Watch isActive={isActiveWatch} watchText={watchText} onToggleWatch={onToggleWatch}/>
                <div className="menuextras">
                    <div className="extras">
                        <ul>
                            <li>
                                <i className="glyphicon glyphicon-user icon-white"/> <a href="#">Авторизация</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav id="mainmenu" className="mainmenu">
                    <ul>
                        <li className="logo-wrapper"><a href="#"><img src={logo} alt="Изображение не найдено"/></a></li>
                        <li>
                            <Link to="/">Все книги</Link>
                        </li>
                        <li>
                            <Link to="/authors">Авторы</Link>
                        </li>
                        <li>
                            <Link to="#">О нас</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
