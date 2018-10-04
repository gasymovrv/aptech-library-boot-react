import React from "react";
import '../css/fader.css';
import {CSSTransitionGroup} from 'react-transition-group'

export default function Fader({children}) {
    return (
        <CSSTransitionGroup
            transitionName='fade'
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={500}

        >
            {children}
        </CSSTransitionGroup>
    )
};