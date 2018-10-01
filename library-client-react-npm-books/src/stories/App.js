import React from 'react';
import '../css/bootstrap.min.css';
import '../css/leaflet.css';
import '../css/icomoon-social.css';
import '../css/bootstrap-theme.css';
import '../css/main.css';
import '../css/aptech-lib-styles.css';
import BookList from "../components/BookList";


function App({bookList}) {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <BookList bookList={bookList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
