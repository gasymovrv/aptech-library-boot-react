import React from "react";
import {Link} from "react-router-dom";

export default function Author({author, onDelete}) {
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
                    <Link to={`/authors/edit-form/${author.id}`}
                          className="btn admin-button item-actions"
                          role="button"
                          data-placement="top"
                          data-toggle="popover"
                          data-content="Изменить">
                        <i className="glyphicon glyphicon-pencil icon-white"/>
                    </Link>
                    <button
                        className="btn admin-button item-actions neighboring-buttons"
                        role="button"
                        data-placement="top"
                        data-toggle="popover"
                        data-content="Удалить"
                        onClick={onDelete(author)}>
                        <i className="glyphicon glyphicon-trash icon-white"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
