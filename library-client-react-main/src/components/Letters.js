import React from 'react';


export default class Letters extends React.Component {

    state = {
        letters: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
    };

    render() {
        let letters = this.state.letters.map(ch =>
            <button key={ch} className="btn btn-sm">{ch}</button>
        );
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="letters-form">
                            <div className="btn-group-sm" role="group" aria-label="First group">
                                {letters}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
