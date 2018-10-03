import React from "react";

export default class Book extends React.Component{
    render() {
        const {book} = this.props;
        let imgPath = `data:image/jpeg;base64,${book.image}`;
        return (
            <div className="col-sm-4">
                <div className="shop-item">
                    <div className="image"><a href="#"><img className="img-rounded" src={imgPath}/></a></div>
                    <div className="title"><h3><a href="#">{book.id}</a></h3></div>
                    <div className="title"><h3><a href="#">{book.name}</a></h3></div>
                    <div className="title"><h3><a href="#">{book.author.fio}</a></h3></div>
                </div>
            </div>
        )
    }
}