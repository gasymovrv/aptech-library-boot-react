import React, {Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';
import BookList from './books/BookList'
import GenreList from './genres/GenreList'
import Header from "./Header";
import Top from "./Top";
import Letters from "./Letters";


function App(){
    return (
        <Fragment>
            <Header/>
            <Top/>
            <Letters/>
            <div className="section">
                <Container>
                    <Row>
                        <Col sm="3">
                            <h4>Жанры</h4>
                            <GenreList/>
                        </Col>
                        <Col sm="9">
                            <BookList/>
                        </Col>
                    </Row>
                </Container>
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
