import React, {Fragment} from 'react';
import Header from "./Header";
import Top from "./Top";
import Letters from "./Letters";
import Main from "./Main";

function App(){
    //если нужно рендерить несколько элементов,
    // то можно так (<Fragment>) или через массив (более старый вар)
    return (
        <Fragment>
            <Header/>
            <Top/>
            <Letters/>
            <Main/>
        </Fragment>
    )
}

export default App;
