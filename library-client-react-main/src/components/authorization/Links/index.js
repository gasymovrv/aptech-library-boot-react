import Links from './Links';
import withLogout from '../../../hocs/withLogout';
import {compose} from 'recompose';

export default compose(withLogout())(Links);