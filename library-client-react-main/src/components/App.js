import React, {Fragment} from 'react';
import Header from "./Header";
import Top from "./Top";
import Letters from "./Letters";
import Main from "./Main";
import Footer from "./Footer";
import BookList from './books/BookList';
import AuthorList from "./authors/AuthorList";
import AuthorForm from "./authors/AuthorForm";
import {findAuthorById} from "../api/authorsApi";
import moment from "moment/moment";

class App extends React.Component{
    state = {
        pageName: 'books',
        author : {
            fio: '',
            birthday: null
        }
    };

    addAuthor = ()=>{
        this.setState({
            pageName: 'authorForm',
            author : {
                fio: '',
                birthday: null
            }
        })
    };

    editAuthor = (authorId) => {
        findAuthorById((author) => {
            author.birthday = moment(Date.parse(author.birthday));
            this.setState({
                pageName: 'authorForm',
                author: author
            })
        }, authorId)
    };

    authorsClick = () => {
        console.log(this);
        this.setState({
            pageName: 'authors'
        })
    };
    booksClick = () => {
        this.setState({
            pageName: 'books'
        })
    };

    render() {
        const {pageName, author} = this.state;
        let component;
        if (pageName === 'books') {
            component = <BookList/>
        } else if (pageName === 'authors') {
            component = <AuthorList authorAddClick={this.addAuthor} authorEditClick={this.editAuthor}/>
        } else if (pageName === 'authorForm') {
            component = <AuthorForm initialData={author}/>
        }
        return (
            <Fragment>
                <Header authorsClick={this.authorsClick} booksClick={this.booksClick}/>
                <Top/>
                <Letters/>
                <Main component={component}/>
                <Footer/>
            </Fragment>
        )
    }
}

export default App;
