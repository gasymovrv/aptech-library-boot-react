import React from 'react';
import Watch from "./Watch";
import { Container, Row, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../img/BeSmart-logo.svg' // relative path to image

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
        const {watchText, isActiveWatch} = this.state;
        return (
            <div className="mainmenu-wrapper">
                <Container>
                    <Row>
                        <ul className="list-inline">
                            <li><input className="btn btn-sm" type="button" onClick={this.toggleIsActiveWatch} value={watchText}/></li>
                            <li><Watch isActive={isActiveWatch}/></li>
                        </ul>
                    </Row>
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
                        <ListGroup>
                            <ListGroupItem className="logo-wrapper"><a href="#"><img src={logo} alt="Изображение не найдено"/></a></ListGroupItem>
                            <ListGroupItem>
                                <a href="#">Все книги</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">Авторы</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">О нас</a>
                            </ListGroupItem>
                        </ListGroup>
                    </nav>
                </Container>
            </div>
        )
    }
}

export default Header;
