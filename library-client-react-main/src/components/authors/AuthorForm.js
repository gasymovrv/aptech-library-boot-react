import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import withForm from "../../hocs/withForm";
import withHandlers from "../../hocs/withHandlers";
import {saveOrUpdateAuthor} from "../../api/authorsApi";
import moment from "moment/moment";

function AuthorForm({data, onSubmit, onReset, onChange, onChangeDate}) {
    const {fio, birthday} = data;

    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <div className="form-group row">
                <label htmlFor="fio" className="col-sm-2 col-form-label">
                    Полное имя<sup style={{color: "red"}}>*</sup>
                </label>
                <div className="col-sm-10">
                    <input
                        id="fio"
                        name='fio'
                        type="text"
                        className="form-control"
                        value={fio}
                        onChange={onChange}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="birthday" className="col-sm-2 col-form-label">
                    Дата рождения
                </label>
                <div className="col-sm-10">
                    <DatePicker
                        id="birthday"
                        className="form-control"
                        selected={birthday}
                        maxDate={moment()}
                        dateFormat="DD.MM.YYYY"
                        placeholderText="Не позже текущей"
                        onChange={onChangeDate('birthday')}
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
    );

}

export default withHandlers({
    onSubmit: props => values => {
        saveOrUpdateAuthor(values, alert, alert);
    }
})(withForm(AuthorForm));