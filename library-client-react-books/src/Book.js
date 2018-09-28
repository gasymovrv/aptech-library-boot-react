import React from 'react'
import BookImage from './BookImage';

export default function Book({book}) {
    return (
        <tr>
            <td>
                <BookImage src={`data:image/jpeg;base64,${book.image}`}/>
                {book.name}
            </td>
            <td>{book.price} MC</td>
            <td>Купить</td>
        </tr>
    );
}