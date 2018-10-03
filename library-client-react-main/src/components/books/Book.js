import React from "react";

class Book extends React.Component{
    render() {
        let imgPath = `data:image/jpeg;base64,${this.props.book.image}`;
        return (
            <div className="col-sm-4">
                <div className="shop-item">
                    <div className="image"><a href="#"><img className="img-rounded" src={imgPath}/></a></div>
                    <div className="title"><h3><a href="#">{this.props.book.id}</a></h3></div>
                    <div className="title"><h3><a href="#">{this.props.book.name}</a></h3></div>
                    <div className="title"><h3><a href="#">{this.props.book.author.fio}</a></h3></div>
                </div>
            </div>
        )
    }
}

export default Book;