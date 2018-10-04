import React, {Fragment} from "react";
import AuthorsApi from "../../api/authorsApi";
import Pagination from "react-js-pagination";
import Author from "./Author";
import Fader from "../Fader";

export default class AuthorList extends React.Component {

    state = {
        authorList: [],
        successDelete: undefined,
        deletedAuthor:{}
        // activePage : 1,
        // itemsCountPerPage : 6,
        // totalItemsCount : 0
    };

    api = new AuthorsApi();

    deleteAuthor = (author) => {
        this.api.deleteById(
            author.id,
            () => {
                this.api.findAll((authors) => {
                    this.setState({
                        authorList: authors,
                        successDelete: true,
                        deletedAuthor: author
                    })
                });
                this.infoTimeout(10);
            },
            () => {
                this.setState({successDelete: false, deletedAuthor: author});
                this.infoTimeout(10);
            }
        );
    };

    infoTimeout = (timeout)=>{
        this.infoBLockTimeout= setTimeout(() => {
            this.setState({successDelete: undefined});
        }, timeout*1000);
    };

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

    componentWillUnmount(){
        clearTimeout(this.infoBLockTimeout);
    }

    render() {
        const {authorList, deletedAuthor, successDelete} = this.state;
        let info = '';
        if (successDelete !== undefined && successDelete) {
            info =
                (<div key={deletedAuthor} className="alert alert-success" role="alert">
                    {`Информация об авторе ${deletedAuthor.fio} успешно удалена!`}
                </div>)
        } else if (successDelete !== undefined && !successDelete) {
            info =
                (<div key={deletedAuthor} className="alert alert-danger info-message" role="alert">
                    {`Произошла ошибка при попытке удалить информацию об авторе ${deletedAuthor.fio}!`}
                </div>)
        }
        let authors = authorList.map(a =>
            <Author key={a.id}
                    author={a}
                    authorEditClick={this.props.authorEditClick}
                    authorDeleteClick={this.deleteAuthor}/>
        );
        return (
            <Fragment>
                <Fader>
                    {info}
                </Fader>
                <div id="row-info" className="row">
                    <div className="col-sm-2">
                        <a onClick={this.props.authorAddClick} href="#" type="button" role="button"
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