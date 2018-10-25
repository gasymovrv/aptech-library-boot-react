import React, {Fragment} from "react";
import Author from "../Author";
import Fader from "../Fader";

export  default function AuthorList({entityList, editClick, addClick, deleteClick, deletedEntity:deletedAuthor, successDelete}) {
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
        <Author key={a.id}
                author={a}
                authorEditClick={editClick}
                authorDeleteClick={deleteClick}/>
    );
    return (
        <Fragment>
            <Fader>
                {info}
            </Fader>
            <div id="row-info" className="row">
                <div className="col-sm-2">
                    <a onClick={addClick}
                       href="#"
                       type="button"
                       role="button"
                       className="btn btn-md admin-button">
                        Добавить автора
                    </a>
                </div>
            </div>
            <div className="row">{authors}</div>
        </Fragment>
    )
}

