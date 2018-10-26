import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Author from "../Author";
import Fader from "../Fader";

export  default function AuthorList({entityList, deletedEntity:deletedAuthor, successDelete, children, onDelete}) {
    let info = '';
    if (successDelete !== undefined && successDelete) {
        info =
            (<div key={deletedAuthor} className="alert alert-success" role="alert">
                {`Информация об авторе ${deletedAuthor.fio} успешно удалена!`}
            </div>)
    } else if (successDelete !== undefined && !successDelete) {
        info =
            (<div key={deletedAuthor} className="alert alert-danger" role="alert">
                {`Произошла ошибка при попытке удалить информацию об авторе ${deletedAuthor.fio}!`}
            </div>)
    }
    let authors = entityList.map(a =>
        <Author onDelete={onDelete} key={a.id} author={a}/>
    );
    return (
        <div className="col-sm-9">
            <Fader>
                {info}
            </Fader>
            <div className="row">
                <div className="col-sm-2">
                    <Link to="/authors/add-form"
                       type="button"
                       role="button"
                       className="btn btn-md admin-button">
                        Добавить автора
                    </Link>
                </div>
            </div>
            <div className="row">{authors}</div>
            <div className="row flex-center">{children}</div>
        </div>
    )
}

