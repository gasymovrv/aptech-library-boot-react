import React, { Component } from 'react';
import BookImage from './BookImage';
import Genre from './Genre';

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
    const books = this.state.books.sort((a,b)=>{
        if (a.genre.name > b.genre.name) {
            return 1;
        }
        if (a.genre.name < b.genre.name) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });
    return (
      <div className="App">
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {books.map((b, idx) => [
              (idx > 1 && books[idx - 1].genre.name !== b.genre.name) ||
              idx === 0 ? (
                <tr>
                  <td className="generation" colspan="3">
                    {b.genre.name}
                  </td>
                </tr>
              ) : null,
              <tr>
                <td>
                    <BookImage src={`data:image/jpeg;base64,${b.image}`}/>
                  {b.name}
                </td>
                <td>{b.price} MC</td>
                <td>Купить</td>
              </tr>,
            ])}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
