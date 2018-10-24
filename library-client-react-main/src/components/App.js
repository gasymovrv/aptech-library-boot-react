import React, {Fragment} from 'react';
import Header from "./Header";
import Top from "./Top";
import Letters from "./Letters";
import Main from "./Main";
import Footer from "./Footer";
import BookList from './BookList';
import AuthorList from "./AuthorList";
import AuthorForm from "./AuthorForm";
import {findAuthorById} from "../api/authorsApi";
import moment from "moment/moment";

class App extends React.Component{
    state = {
        pageName: 'books',
        author : {
            fio: '',
            birthday: null
        },
        isEditPage : false
    };

    addAuthor = ()=>{
        this.setState({
            pageName: 'authorForm',
            author : {
                fio: '',
                birthday: null
            },
            isEditPage: false
        })
    };

    editAuthor = (authorId) => {
        findAuthorById((author) => {
            if(author.birthday){
                author.birthday = moment(Date.parse(author.birthday));
            }
            this.setState({
                pageName: 'authorForm',
                author: author,
                isEditPage: true
            })
        }, authorId)
    };

    authorsClick = () => {
        this.setState({
            pageName: 'authors',
            isEditPage: false
        })
    };
    booksClick = () => {
        this.setState({
            pageName: 'books',
            isEditPage: false
        })
    };

    render() {
        const {pageName, author, isEditPage} = this.state;
        let component;
        if (pageName === 'books') {
            component = <BookList/>
        } else if (pageName === 'authors') {
            component = <AuthorList addClick={this.addAuthor} editClick={this.editAuthor}/>
        } else if (pageName === 'authorForm') {
            component = <AuthorForm initialData={author} isEdit={isEditPage}/>
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
