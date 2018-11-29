import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import '../../css/fader.css';
import {consoleLog} from '../../helpers/consoleLog';

function Fader({children}) {
    return (
        <CSSTransitionGroup
            transitionName='fade'
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}

        >
            {children}
        </CSSTransitionGroup>
    )
}

export default class InfoBox extends React.Component {
    state = {
        isTimeout: false,
        stopped: true
    };

    componentDidMount() {
        const {show} = this.props;
        if(show){
            this.startInfoBoxTimeout();
        }
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.show) {
            this.setState({isTimeout: false});
            this.startInfoBoxTimeout();
        }
    }

    componentWillUnmount() {
        clearTimeout(this.infoBoxTimeout);
    }

    startInfoBoxTimeout = ()=>{
        const {timeout, callbackStopShow} = this.props;
        this.setState({stopped: false});
        if (callbackStopShow && typeof callbackStopShow === 'function') {
            this.infoBoxTimeout = setTimeout(() => {
                this.setState({isTimeout: true});
                callbackStopShow();
            }, timeout * 1000);
            consoleLog('callbackStopShow exist')
        } else {
            this.infoBoxTimeout = setTimeout(() => {
                this.setState({
                    isTimeout: true,
                    stopped: true
                });
            }, timeout * 1000);
            consoleLog('stopped exist')
        }
    };

    render() {
        const {infoKey, successText, errorText, successAction, show} = this.props;
        const {isTimeout, stopped} = this.state;
        let info = null;
        if (show && successAction && !isTimeout && !stopped) {
            info =
                (<div key={infoKey} className='alert alert-success' role='alert'>
                    {successText}
                </div>)
        } else if (show && !successAction && !isTimeout && !stopped) {
            info =
                (<div key={infoKey} className='alert alert-danger' role='alert'>
                    {errorText}
                </div>)
        }
        return (
            <Fader>
                {info}
            </Fader>
        );
    }

}