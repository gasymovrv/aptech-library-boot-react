import React, {Component} from 'react';
import Category from './Category';

class App extends Component {
  state = {
    loading: true,
    books: [],
  };

  componentDidMount() {
    fetch('http://localhost:8080/books/findAll')
      .then(r => r.json())
      .then(books => {
        this.setState({
          loading: false,
          books: books,
        });
        // const ws = new WebSocket('ws://books.demo.javascript.ninja');
        // ws.addEventListener('message', e => {
        //   const message = JSON.parse(e.data);
        //   if (message.action === 'add') {
        //     this.setState({
        //       books: books,
        //     });
        //   }
        //
        //   if (message.action === 'update') {
        //     // Хинт для Кати: тут ошибка
        //     console.log(this.state.books, message.cat.id);
        //     const cat = this.state.books.find(({ id }) => id === message.cat.id);
        //     if (cat) {
        //       Object.assign(cat, message.cat);
        //       this.setState({ books: [...books, cat] });
        //     }
        //   }
        // });
      });
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
