import React from "react";

export default class Author extends React.Component {
    render() {
        const {author} = this.props;
        return (
            <div className="col-sm-4">
                <div className="shop-item">
                    <div className="title">
                        <h3>
                            <a href="#">{author.fio}</a>
                        </h3>
                    </div>
                    <div className="title">
                        <h3>Дата рождения:
                            {author.birthday ? author.birthday : 'Неизвестна'}
                        </h3>
                    </div>
                    {/*<div className="title">*/}
                    {/*<h3>Количество книг: {author.books.length}</h3>*/}
                    {/*</div>*/}
                    <div className="title">
                        <h3>Просмотры книг: {author.views}</h3>
                    </div>
                    <div className="actions">
                        <a href="#" className="btn admin-button item-actions"
                           role="button" data-placement="top" data-toggle="popover" data-content="Изменить">
                            <i className="glyphicon glyphicon-pencil icon-white"/>
                        </a>
                        <a href="#" className="btn admin-button item-actions"
                           role="button" data-placement="top" data-toggle="popover" data-content="Удалить">
                            <i className="glyphicon glyphicon-trash icon-white"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
