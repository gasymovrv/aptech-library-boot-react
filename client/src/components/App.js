import React, {Fragment} from 'react';
import '../css/bootstrap.min.css';
import '../css/leaflet.css';
import '../css/icomoon-social.css';
import '../css/bootstrap-theme.css';
import '../css/main.css';
import '../css/aptech-lib-styles.css';
import BookList from './books/BookList'
import GenreList from './genres/GenreList'
import Header from "./Header";
import Top from "./Top";
import Letters from "./Letters";

//варик через class - он же класс-компонент - он же state-full
// class App extends React.Component {
//
//     render() {
//         return (
//             [
//             <Header/>,
//             <Top/>,
//             <Letters/>,
//             <div className="section">
//                 <div className="container">
//                     <div className="row">
//
//                         <div key={"genreListDiv"} className="col-sm-3 blog-sidebar">
//                             <h4>Жанры</h4>
//                             <GenreList/>
//                         </div>
//
//                         <div className="col-sm-9">
//                             <BookList/>
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//             ]
//         )
//     }
// }

// варик через function (от jsninja) - он же функц-ый компонент - он же state-less
function App(){
    //если нужно рендерить несколько элементов,
    // то можно так (<Fragment>) или через массив (более старый вар)
    return (
        <Fragment>
            <Header/>
            <Top/>
            <Letters/>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div key={"genreListDiv"} className="col-sm-3 blog-sidebar">
                            <h4>Жанры</h4>
                            <GenreList/>
                        </div>
                        <div className="col-sm-9">
                            <BookList/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

// варик через function (мой) старый
// function App(props){
// }
//
// App.prototype = Object.create(React.Component.prototype);
// App.constructor = App;
// App.prototype.state = {bookList: []};
//
// App.prototype.componentDidMount = function (){
//     fetch('http://localhost:8080/books/findAll')
//         .then(response => response.json())
//         .then(data => this.setState({bookList: data}));
// };
//
// App.prototype.render = function (){
//     return (
//         <div className="section">
//             <div className="container">
//                 <div className="row">
//
//                     <div className="col-sm-3 blog-sidebar">
//                     </div>
//
//                     <div className="col-sm-9">
//                         <BookList bookList={this.state.bookList}/>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//     );
// };

export default App;
