import React from "react";

class Book extends React.Component{
    render() {
        const {book} = this.props;
        return (
            <div className="col-sm-4">
                <div className="shop-item">
                    <div className="title"><h3><a href="#">{book.id}</a></h3></div>
                    <div className="title"><h3><a href="#">{book.name}</a></h3></div>
                    <div className="title"><h3><a href="#">{book.price}</a></h3></div>
                </div>
            </div>
        )
    }
}

export default Book;