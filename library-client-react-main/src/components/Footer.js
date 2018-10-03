import React from 'react';

export default function Footer(){
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-footer col-md-3 col-xs-6">
                        <h3>Навигация</h3>
                        <ul className="no-list-style footer-navigate-section">
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Список книг</a></li>
                            <li><a href="#">Список авторов</a></li>
                            <li><a href="#">О нас</a></li>
                        </ul>
                    </div>

                    <div className="col-footer col-md-4 col-xs-6">
                        <h3>Контакты</h3>
                        <p className="contact-us-details">
                            <b>Адрес:</b>г. Саратов, ул.Политехническая, 77<br/>
                            <b>Телефон:</b>+7(8452)123456<br/>
                            <b>Email:</b> <a href="mailto:besmart@gmail.com">besmart@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-copyright">&copy; 2018 BeSmart. Все права защищены.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

