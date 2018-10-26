import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Author from "../Author";
import Fader from "../Fader";

export  default function AuthorList({deletedEntity:deletedAuthor, successAction}) {
    let info;
    if (successAction !== undefined && successAction) {
        info =
            (<div key={deletedAuthor} className="alert alert-success" role="alert">
                {`Информация об авторе ${deletedAuthor.fio} успешно удалена!`}
            </div>)
    } else if (successAction !== undefined && !successAction) {
        info =
            (<div key={deletedAuthor} className="alert alert-danger" role="alert">
                {`Произошла ошибка при попытке удалить информацию об авторе ${deletedAuthor.fio}!`}
            </div>)
    } else {
        info = null;
    }
    return info;
}

