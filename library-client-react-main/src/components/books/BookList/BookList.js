import React from "react";
import Book from "../Book";
import InfoBox from "../../InfoBox";

export default function BookList({entityList, deletedEntity, successDelete, children, onAdd, onDelete, ...props}) {
    let books = entityList.map(b =>
        <Book key={b.id} book={b} onDelete={onDelete} {...props}/>
    );
    return (
        <div className="col-sm-9">
            <InfoBox infoKey={deletedEntity.id}
                     successAction={successDelete}
                     successText={`Книга ${deletedEntity.name} успешно удалена!`}
                     errorText={`Произошла ошибка при попытке удалить книгу ${deletedEntity.name}!`}
            />
            <div className="row">{books}</div>
            <div className="row flex-center">{children}</div>
        </div>
    );
}