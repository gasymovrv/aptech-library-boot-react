import React from "react";
import {Link} from "react-router-dom";
import Author from "../Author";
import InfoBox from "../InfoBox";

export  default function AuthorList({entityList, deletedEntity, successDelete, children, onDelete, ...props}) {
    const url = props.match.url;
    let authors = entityList.map(a =>
        <Author key={a.id} author={a} onDelete={onDelete} url={url}/>
    );
    return (
        <div className="col-sm-9">
            <InfoBox infoKey={deletedEntity.id}
                     successAction={successDelete}
                     successText={`Информация об авторе ${deletedEntity.fio} успешно удалена!`}
                     errorText={`Произошла ошибка при попытке удалить информацию об авторе ${deletedEntity.fio}!`}
            />
            <div className="row">
                <div className="col-sm-2">
                    <Link to={`${url}/add-form`}
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

