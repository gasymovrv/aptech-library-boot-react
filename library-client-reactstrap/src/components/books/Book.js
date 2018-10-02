import React from "react";
import {Col} from "reactstrap";

class Book extends React.Component{
    render() {
        let imgPath = `data:image/jpeg;base64,${this.props.book.image}`;
        return (
            <Col sm="4">
                <div className="shop-item">
                    <div className="image"><a href="#"><img className="img-rounded" src={imgPath}/></a></div>
                    <div className="title"><h6><a href="#">{this.props.book.id}</a></h6></div>
                    <div className="title"><h6><a href="#">{this.props.book.name}</a></h6></div>
                    <div className="title"><h6><a href="#">{this.props.book.author.fio}</a></h6></div>
                </div>
            </Col>
        )
    }
}

export default Book;