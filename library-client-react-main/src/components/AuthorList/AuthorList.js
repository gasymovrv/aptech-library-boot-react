import React from "react";
import {Link} from "react-router-dom";
import Author from "../Author";
import Fader from "../Fader";
import InfoBox from "../InfoBox";

export  default function AuthorList({entityList, deletedEntity, successDelete, children, onDelete}) {
    let authors = entityList.map(a =>
        <Author onDelete={onDelete} key={a.id} author={a}/>
    );
    return (
        <div className="col-sm-9">
            <Fader>
                <InfoBox infoKey={deletedEntity.id}
                         successAction={successDelete}
                         successText={`Информация об авторе ${deletedEntity.fio} успешно удалена!`}
                         errorText={`Произошла ошибка при попытке удалить информацию об авторе ${deletedEntity.fio}!`}
                />
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

