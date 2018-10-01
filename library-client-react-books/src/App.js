import React, {Component} from 'react';
import Category from './Category';
import Api from './api';

class App extends Component {
  state = {
    books: [],
  };

  api = new Api();

  componentDidMount() {
    this.api.subscribe((books)=>this.setState({books}));
  }

  componentWillUnmount() {
    this.api.unsubscribe((books)=>this.setState({books}));
  }

  render() {
    //acc - это объект, содержащий ключи - genre.id со значением в виде массива [book]
    const books = this.state.books.reduce((acc, book)=>{
        if(acc[book.genre.id]){
            acc[book.genre.id].push(book);
        } else {
            acc[book.genre.id] = [book];
        }
        return acc;
    }, {});
    return (
        <div className="App">
            <table className="ui celled table">
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {Object.keys(books).map((key) => (
                    <Category
                        key={key}
                        title={`${books[key][0] ? books[key][0].genre.name : ""}`}
                        books={books[key]}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
  }
}

export default App;
