import React, {Fragment} from "react";
import AuthorsApi from "../../api/authorsApi";
import DatePicker from "react-datepicker";
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Fader from "../Fader";

export default class AuthorAddOrEdit extends React.Component {
    state = {
        author: {
            fio: '',
            //дефолтное - текущая, т.к. если пустая,
            // то DatePicker глючит (уменьшает на 1 день)
            birthday: moment()
        },
        oldAuthor: {},
        success: undefined
    };

    api = new AuthorsApi();

    handleFio = (event) => {
        const {value} = event.target;
        this.setState((state) => {
            let author = state.author;
            author.fio = value;
            return {author: author}
        });
    };

    handleBirthday = (date) => {
        this.setState((state) => {
            let author = state.author;
            author.birthday = date;
            return {author: author}
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.api.saveOrUpdate(
            this.state.author,
            () => {
                this.setState((state) => {
                    let resultState = {success: true};
                    resultState.oldAuthor = {};
                    Object.assign(resultState.oldAuthor, state.author);
                    return resultState;
                });
                this.infoTimeout(10);
            },
            () => {
                this.setState({success: false});
                this.infoTimeout(10);
            }
        );
    };

    handleReset = (event) => {
        event.preventDefault();
        this.setState((state) => {
            let authorCopy = {};
            Object.assign(authorCopy, state.oldAuthor);
            return {
                author: authorCopy
            }
        });
    };

    infoTimeout = (timeout)=>{
        this.infoBLockTimeout = setTimeout(() => {
            this.setState({success: undefined});
        }, timeout*1000);
    };

    componentDidMount() {
        const {isEdit, authorId} = this.props;
        if (isEdit) {
            this.api.findById(
                (author) => {
                    author.birthday = moment(Date.parse(author.birthday));
                    let authorCopy = {};
                    Object.assign(authorCopy, author);
                    this.setState({
                        author: author,
                        oldAuthor: authorCopy
                    })
                },
                authorId
            );
        } else {
            this.setState((state) => {
                let authorCopy = {};
                Object.assign(authorCopy, state.author);
                return {
                    oldAuthor: authorCopy
                };
            })
        }
    }

    componentWillUnmount(){
        clearTimeout(this.infoBLockTimeout);
    }

    render() {
        const {author, success} = this.state;
        const {isEdit} = this.props;
        let successText = isEdit?'отредактирована':'добавлена';
        let errorText = isEdit?'изменить информацию об':'добавления информации о новом';
        let info = '';
        if (success !== undefined && success) {
            info =
                (<div key={author} className="alert alert-success" role="alert">
                    {`Информация об авторе ${author.fio} успешно ${successText}!`}
                </div>)
        } else if (success !== undefined && !success) {
            info =
                (<div key={author} className="alert alert-danger info-message" role="alert">
                    {`Произошла ошибка при попытке ${errorText} авторе ${author.fio}!`}
                </div>)
        }
        return (
            <Fragment>
                <Fader>
                    {info}
                </Fader>
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <div className="form-group row">
                        <label htmlFor="fio" className="col-sm-2 col-form-label">Полное имя<sup
                            style={{color: "red"}}>*</sup></label>
                        <div className="col-sm-10">
                            <input
                                id="fio"
                                name='fio'
                                type="text"
                                className="form-control"
                                value={author.fio}
                                onChange={this.handleFio}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="birthday" className="col-sm-2 col-form-label">Дата рождения</label>
                        <div className="col-sm-10">
                            <DatePicker
                                className="form-control"
                                selected={author.birthday}
                                maxDate={moment()}
                                dateFormat="DD.MM.YYYY"
                                placeholderText="Не позже текущей"
                                onChange={this.handleBirthday}
                            />
                        </div>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*<label htmlFor="books">Выберите книги данного автора</label>*/}
                    {/*<div>*/}
                    {/*<select className="form-control" id="books" name="books" multiple="multiple" size="6">*/}
                    {/*<c:forEach var="b" items="${bookList}">*/}

                    {/*<c:choose>*/}
                    {/*<c:when test="${customFn:contains(author.books, b)}">*/}
                    {/*<option selected value="${b.id}">${b.name}</option>*/}
                    {/*</c:when>*/}
                    {/*<c:otherwise>*/}
                    {/*<option value="${b.id}">${b.name}</option>*/}
                    {/*</c:otherwise>*/}
                    {/*</c:choose>*/}

                    {/*</c:forEach>*/}
                    {/*</select>*/}
                    {/*</div>*/}
                    {/*<small className="form-text text-muted">*/}
                    {/*<sup>*</sup> Если у книги уже был указан автор, то он заменится на текущего*/}
                    {/*</small>*/}
                    {/*</div>*/}
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group-sm pull-right" role="group" aria-label="First group">
                            <button type="submit" className="btn btn-sm">Сохранить</button>
                            <button type="reset" className="btn btn-sm">Отмена</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}