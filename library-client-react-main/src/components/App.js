import React, {Fragment} from 'react';
import Header from "./Header";
import Top from "./Top";
import Letters from "./Letters";
import Main from "./Main";
import Footer from "./Footer";
import BookList from './books/BookList';
import AuthorList from "./authors/AuthorList";
import AuthorAddOrEdit from "./authors/AuthorAddOrEdit";

export default class App extends React.Component{
    //если нужно рендерить несколько элементов,
    // то можно так (<Fragment>) или через массив (более старый вар)
    state = {
        pageName: 'books',
        action: '',
        editedAuthorId: -1
    };

    getAuthorsPage = ()=>{
      this.setState({
          pageName: 'authors',
          action: '',
          editedAuthorId: -1
      })
    };

    getBooksPage = ()=>{
      this.setState({
          pageName: 'books',
          action: '',
          editedAuthorId: -1
      })
    };

    addAuthor = ()=>{
        this.setState({
            pageName: 'addAuthor',
            action: '',
            editedAuthorId: -1
        })
    };

    editAuthor = (authorId) => {
        this.setState({
            pageName: 'addAuthor',
            action: 'edit',
            editedAuthorId: authorId
        })
    };

    render() {
        const {pageName, action, editedAuthorId} = this.state;
        let component;
        if (pageName === 'books') {
            component = <BookList/>
        } else if (pageName === 'authors') {
            component = <AuthorList authorAddClick={this.addAuthor} authorEditClick={this.editAuthor}/>
        } else if (pageName === 'addAuthor' && action!=='edit') {
            component = <AuthorAddOrEdit/>
        } else if (pageName === 'addAuthor' && action==='edit') {
            component = <AuthorAddOrEdit isEdit authorId={editedAuthorId}/>
        }

        return (
            <Fragment>
                <Header authorsClick={this.getAuthorsPage} booksClick={this.getBooksPage}/>
                <Top/>
                <Letters/>
                <Main component={component}/>
                <Footer/>
            </Fragment>
        )
    }
}
