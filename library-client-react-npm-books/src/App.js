import React, {Component} from 'react';

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/books/findAll')
      .then(r => r.json())
      .then(books => {
        this.setState({books: books});
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
                        <th>Изображение</th>
                        <th>Название</th>
                        <th>Жанр</th>
                        <th>Цена, р.</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                {books.map((b) =>
                    <tr>
                        <td>
                            <img src={`data:image/jpeg;base64,${b.image}`}/>
                        </td>
                        <td>{b.name}</td>
                        <td>{b.genre.name}</td>
                        <td>{b.price}</td>
                        <td>Купить</td>
                    </tr>
                )
                }
                </tbody>
            </table>
        </div>
    );
  }
}

export default App;
