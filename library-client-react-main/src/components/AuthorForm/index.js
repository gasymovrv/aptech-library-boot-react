import {compose, withHandlers, withState} from 'recompose';

import AuthorForm from './AuthorForm';
import withForm from "../../hocs/withForm";
import {findAuthorById, saveOrUpdateAuthor} from "../../api/authorsApi";

function find(fn, authorId) {
    findAuthorById(fn, authorId);
}

const withHandleForm = compose(
    withHandlers({
        onSubmit: props => (data, okFn, errFn) => {
            saveOrUpdateAuthor(data, okFn, errFn);
        }
    }),
    withState('initialData', 'setInitialData', {
        fio: '',
        birthday: null
    }),
    withForm
);
export default compose(withHandleForm)(AuthorForm);