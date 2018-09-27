import React, { Component } from 'react';

class App extends Component {
  state = {
    loading: true,
    cats: [],
  };

  componentDidMount() {
    fetch('http://localhost:8080/books/findAll')
      .then(r => r.json())
      .then(cats => {
        this.setState({
          loading: false,
          cats: cats,
        });
        // const ws = new WebSocket('ws://cats.demo.javascript.ninja');
        // ws.addEventListener('message', e => {
        //   const message = JSON.parse(e.data);
        //   if (message.action === 'add') {
        //     this.setState({
        //       cats: cats,
        //     });
        //   }
        //
        //   if (message.action === 'update') {
        //     // Хинт для Кати: тут ошибка
        //     console.log(this.state.cats, message.cat.id);
        //     const cat = this.state.cats.find(({ id }) => id === message.cat.id);
        //     if (cat) {
        //       Object.assign(cat, message.cat);
        //       this.setState({ cats: [...cats, cat] });
        //     }
        //   }
        // });
      });
  }

  render() {
    const books = this.state.cats.sort((a,b)=>a.genre.name > b.genre.name);
    return (
      <div className="App">
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Имя</th>
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
                  <img src={`data:image/jpeg;base64,${b.image}`} />
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
