import {compose, lifecycle, withHandlers, withState} from 'recompose';

import Header from './Header';
import {getCurrentUser} from '../../api/usersApi';

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
        }
    }),
    lifecycle({
        componentDidMount() {
            getCurrentUser((user)=>{return this.setState({user:{...user}})})
        }
    })
);
export default withWatch(Header);