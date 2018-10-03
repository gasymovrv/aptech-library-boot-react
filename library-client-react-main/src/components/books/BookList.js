import React, {Fragment} from "react";
import Book from "./Book";
import BooksApi from "../../api/booksApi";
import Pagination from "react-js-pagination";

class BookList extends React.Component{

    state = {
        bookList: [],
        activePage : 1,
        itemsCountPerPage : 6,
        totalItemsCount : 0
    };

    api = new BooksApi();


    handlePageChange = (pageNumber) => {
        console.log(pageNumber);
        this.setState({activePage: pageNumber});
        this.api.findAllWithPaging(
            (books, totalElements) => {
                this.setState({bookList: books, totalItemsCount: totalElements})
            },
            pageNumber,
            this.state.itemsCountPerPage
        );
    };


    componentDidMount(){
        const {activePage, itemsCountPerPage} = this.state;
        this.api.findAllWithPaging(
            (books, totalElements) => {
                this.setState({bookList: books, totalItemsCount: totalElements})
            },
            activePage,
            itemsCountPerPage
        );
    }

    render() {
        const {bookList, activePage, itemsCountPerPage, totalItemsCount} = this.state;
        let books = bookList.map(b =>
            <Book key={b.id} book={b}/>
        );
        return (
            <Fragment>
                    <div className="row">{books}</div>
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsCountPerPage}
                        totalItemsCount={totalItemsCount}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
            </Fragment>
            )
    }
}

export default BookList;