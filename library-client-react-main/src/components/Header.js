import React from 'react';
import Watch from "./Watch";
import logo from '../img/BeSmart-logo.png' // relative path to image

class Header extends React.Component {

    state = {
        isActiveWatch: false,
        watchText: "Включить часы"
    };

    //пишем через стрелочную чтобы связать this
    toggleIsActiveWatch = () => {
        if (!this.state.isActiveWatch) {
            this.setState({
                isActiveWatch: true,
                watchText: "Выключить часы"
            })
        } else {
            this.setState({
                isActiveWatch: false,
                watchText: "Включить часы"
            })
        }
    };

    render() {
        return (
            <div className="mainmenu-wrapper">
                <div className="container">
                    <div className="row">
                        <ul className="list-inline">
                            <li><input className="btn btn-sm" type="button" onClick={this.toggleIsActiveWatch} value={this.state.watchText}/></li>
                            <li><Watch isActive={this.state.isActiveWatch}/></li>
                        </ul>
                    </div>
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
                                <a href="#">Все книги</a>
                            </li>
                            <li>
                                <a href="#">Авторы</a>
                            </li>
                            <li>
                                <a href="#">О нас</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;
