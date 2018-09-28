import React, {Component, Fragment} from 'react';
import Book from './Book';

export default class Category extends Component {

    state = {
        isOpen: true
    };

    collapseCategory = ()=>{
        //меняем state в зависимости от старого state
        this.setState(({isOpen}) => ({isOpen: !isOpen}));
    };

    render() {
        const {title, books} = this.props;
        return (
            <Fragment>
                <tr onClick={this.collapseCategory} className="category-title">
                    <td className="category" colSpan="3">
                        {title}
                    </td>
                </tr>
                {
                    // если isOpen=true, то вернется не true, а books !!!
                    this.state.isOpen && books.map(book => <Book key={book.id} book={book}/>)
                }
            </Fragment>
        );
    }
}

