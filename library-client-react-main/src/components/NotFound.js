import React from 'react';
import error from '../img/404.gif' // relative path to image

export default function NotFound() {
    return (
        <div className="col-sm-9">
            <img src={error}/>
        </div>
    );
}
