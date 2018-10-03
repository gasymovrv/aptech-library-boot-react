import React, {Fragment} from 'react';
import Header from "./Header";
import Top from "./Top";
import Letters from "./Letters";
import Main from "./Main";
import Footer from "./Footer";
import BookList from './books/BookList';
import AuthorList from "./authors/AuthorList";

export default class App extends React.Component{
    //если нужно рендерить несколько элементов,
    // то можно так (<Fragment>) или через массив (более старый вар)
    state = {
        pageName: 'books'
    };

    getAuthorsPage = ()=>{
      this.setState({pageName: 'authors'})
    };

    getBooksPage = ()=>{
      this.setState({pageName: 'books'})
    };

    render() {
        const {pageName} = this.state;
        let component;
        if (pageName === 'books') {
            component = <BookList/>
        } else if (pageName === 'authors') {
            component = <AuthorList/>
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
