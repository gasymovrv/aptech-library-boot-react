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

//варик через function
// function Book(){}
// Book.prototype = Object.create(React.Component.prototype);
// Book.prototype.render = function (){
//     const imgPath = `data:image/jpeg;base64,${this.props.book.image}`;
//     return (
//         <div className="col-sm-4">
//             <div className="shop-item">
//                 <div className="image"><a href="#"><img className="img-rounded" src={imgPath}></img></a></div>
//                 <div className="title"><h3><a href="#">{this.props.book.id}</a></h3></div>
//                 <div className="title"><h3><a href="#">{this.props.book.name}</a></h3></div>
//                 <div className="title"><h3><a href="#">{this.props.book.author.fio}</a></h3></div>
//             </div>
//         </div>
//     )
// };
// Book.constructor = Book;

export default Book;