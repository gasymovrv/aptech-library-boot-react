import {compose, withHandlers, withState} from 'recompose';

import Header from './Header';
import {logoutUser} from '../../api/usersApi';

const withWatch = compose(
    withState('isActiveWatch', 'setActiveWatch', false),
    withState('watchText', 'setWatchText', 'Включить часы'),
    withHandlers({
        onToggleWatch: props => () => {
            if (!props.isActiveWatch) {
                props.setActiveWatch(true);
                props.setWatchText('Выключить часы');
            } else {
                props.setActiveWatch(false);
                props.setWatchText('Включить часы');
            }
        },
        onExit: (props) => (event) => {
            event.preventDefault();
            localStorage.setItem('user', null);
            logoutUser();
            props.history.push(props.appPaths.login)
        }
    })
);
export default withWatch(Header);