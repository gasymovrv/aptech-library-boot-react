import React, {Component} from 'react';
import LifecycleExample from './LifecycleExample';
import PureCompExample from './PureCompExample';
import ErrorBoundary from './ErrorBoundary';
import ErrorExample from './ErrorExample';
import RenderCallbackExample, {Loading, Profile} from './RenderCallbackExample';
import HooksExample from './HooksExample';

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
                    {/*<LifecycleExample isActive={isActiveWatch} watchText={watchText} onToggleWatch={this.onToggleWatch}/>*/}
                    {/*<PureCompExample/>*/}
                    {/*<ErrorBoundary>*/}
                        {/*<ErrorExample/>*/}
                    {/*</ErrorBoundary>*/}
                    <RenderCallbackExample username='tylermcginnis33'>
                        {(user) => user === null
                            ? <Loading />
                            : <Profile user={user} />}
                    </RenderCallbackExample>
                    <HooksExample/>
                </div>
            </div>
        );
    }
}
