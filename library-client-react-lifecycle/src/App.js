import React, {Component} from 'react';
import Watch from './Watch';
import PureCompExample from './PureCompExample';

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
            <div className="app">
                <div>
                    <Watch isActive={isActiveWatch} watchText={watchText} onToggleWatch={this.onToggleWatch}/>
                    <PureCompExample/>
                </div>
            </div>
        );
    }
}
