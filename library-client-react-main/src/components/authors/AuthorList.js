import React, {Fragment} from "react";
import {deleteAuthorById, findAuthorsWithPaging} from "../../api/authorsApi";
import Author from "./Author";
import Fader from "../Fader";
import withPagination from "../../hocs/withPagination";

class AuthorList extends React.Component {


    state = {
        successDelete: undefined,
        deletedAuthor:{}
    };

    deleteAuthor = (author) => {
        deleteAuthorById(
            author.id,
            () => {
                this.setState({
                    successDelete: true,
                    deletedAuthor: author
                });
                clearTimeout(this.infoBoxTimeout);
                this.startInfoBoxTimeout(10);
            },
            () => {
                this.setState({
                    successDelete: false,
                    deletedAuthor: author
                });
                clearTimeout(this.infoBoxTimeout);
                this.startInfoBoxTimeout(10);
            }
        );
    };

    startInfoBoxTimeout = (timeout)=>{
        this.infoBoxTimeout= setTimeout(() => {
            this.setState({successDelete: undefined});
        }, timeout*1000);
    };

    componentWillUnmount(){
        clearTimeout(this.infoBLockTimeout);
    }

    render() {
        const {deletedAuthor, successDelete} = this.state;
        const {data:authorList} = this.props;
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
                        <a onClick={this.props.authorAddClick}
                           href="#"
                           type="button"
                           role="button"
                           className="btn btn-md admin-button">
                            Добавить автора
                        </a>
                    </div>
                </div>
                <div className="row">{authors}</div>
            </Fragment>
        )
    }
}

export default withPagination(AuthorList, findAuthorsWithPaging);