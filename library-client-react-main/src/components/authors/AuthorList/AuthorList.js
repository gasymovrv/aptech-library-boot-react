import React from 'react';
import Author from '../Author';
import InfoBox from '../../InfoBox';
import {isAdmin} from '../../../api/usersApi';

export  default function AuthorList({entityList, deletedEntity, successDelete, children, onAdd, onDelete, ...props}) {
    let authors = entityList.map(a =>
        <Author key={a.id} author={a} onDelete={onDelete} {...props}/>
    );
    let currentUserIsAdmin = isAdmin();
    return (
        <div className='col-sm-9'>
            <InfoBox infoKey={deletedEntity.id}
                     successAction={successDelete}
                     successText={`Информация об авторе ${deletedEntity.fio} успешно удалена!`}
                     errorText={`Произошла ошибка при попытке удалить информацию об авторе ${deletedEntity.fio}!`}
            />
            {currentUserIsAdmin &&
            <div className='row'>
                <div className='col-sm-2'>
                    <button
                        className='btn btn-md admin-button'
                        onClick={onAdd}>
                        Добавить автора
                    </button>
                </div>
            </div>
            }
            <div className='row'>{authors}</div>
            <div className='row flex-center'>{children}</div>
        </div>
    )
}

