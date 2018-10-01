import React from "react";
import Book from "./Book";

class BookList extends React.Component {

    render() {
        return (
            <div className="row">{
                this.props.bookList.map(b =>
                    <Book key={b.id} book={b}/>
                )}
            </div>
        )
    }
}

export default BookList;