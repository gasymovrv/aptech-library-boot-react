import {compose, withHandlers} from 'recompose';

import AuthorForm from './AuthorForm';
import withForm from "../../hocs/withForm";
import {saveOrUpdateAuthor} from "../../api/authorsApi";

const withHandleForm = compose(
    withHandlers(
        {
            onSubmit: props => (data, okFn, errFn) => {
                saveOrUpdateAuthor(data, okFn, errFn);
            }
        }
    ),
    withForm
);
export default compose(withHandleForm)(AuthorForm);