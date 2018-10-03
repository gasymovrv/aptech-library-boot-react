import React, {Fragment} from "react";
import AuthorsApi from "../../api/authorsApi";
import Pagination from "react-js-pagination";
import Author from "./Author";

export default class AuthorList extends React.Component {

    state = {
        authorList: []
        // activePage : 1,
        // itemsCountPerPage : 6,
        // totalItemsCount : 0
    };

    api = new AuthorsApi();


    // handlePageChange = (pageNumber) => {
    //     console.log(pageNumber);
    //     this.setState({activePage: pageNumber});
    //     this.api.findAllWithPaging(
    //         (books, totalElements) => {
    //             this.setState({authorList: books, totalItemsCount: totalElements})
    //         },
    //         pageNumber,
    //         this.state.itemsCountPerPage
    //     );
    // };


    componentDidMount() {
        this.api.findAll((authors) => {
            this.setState({authorList: authors})
        });
        // const {activePage, itemsCountPerPage} = this.state;
        // this.api.findAllWithPaging(
        //     (books, totalElements) => {
        //         this.setState({authorList: books, totalItemsCount: totalElements})
        //     },
        //     activePage,
        //     itemsCountPerPage
        // );
    }

    render() {
        const {authorList} = this.state;
        let authors = authorList.map(a =>
            <Author key={a.id} author={a}/>
        );
        return (
            <Fragment>
                <div id="row-info" className="row">
                    <div className="col-sm-2">
                        <a href="#" type="button" role="button"
                           className="btn btn-md admin-button">Добавить автора</a>
                    </div>
                </div>
                <div className="row">{authors}</div>
                {/*<Pagination*/}
                    {/*activePage={activePage}*/}
                    {/*itemsCountPerPage={itemsCountPerPage}*/}
                    {/*totalItemsCount={totalItemsCount}*/}
                    {/*pageRangeDisplayed={5}*/}
                    {/*onChange={this.handlePageChange}*/}
                {/*/>*/}
            </Fragment>
        )
    }
}