import React, {Component} from 'react';
import Watch from './Watch';

export default class App extends Component {
    state = {
        isActiveWatch: false,
        watchText: 'Включить часы'
    };

    onToggleWatch = () => {
        const {isActiveWatch} = this.state;
        if (!isActiveWatch) {
            this.setState({
                isActiveWatch: true,
                watchText: 'Выключить часы'
            });
        } else {
            this.setState({
                isActiveWatch: false,
                watchText: 'Включить часы'
            });
        }
    };

    render() {
        const {isActiveWatch, watchText} = this.state;
        return (
            <div className="App">
                <Watch isActive={isActiveWatch} watchText={watchText} onToggleWatch={this.onToggleWatch}/>
            </div>
        );
    }
}
