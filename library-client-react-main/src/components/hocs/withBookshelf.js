import { addBook } from '../api';
import withHandlers from '../hocs/withHandlers';

const enhance = withHandlers({
  submit: props => values => {
    addBook(values);
  },
});

export default enhance;
