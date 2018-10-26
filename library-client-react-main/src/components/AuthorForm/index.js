import {compose, lifecycle, withHandlers, withState} from 'recompose';

import AuthorForm from './AuthorForm';
import withForm from "../../hocs/withForm";
import {findAuthorById, saveOrUpdateAuthor} from "../../api/authorsApi";

const withHandleForm = compose(
    withHandlers({
        onSubmit: props => (data, okFn, errFn) => {
            saveOrUpdateAuthor(data, okFn, errFn);
        }
    }),
    withState('entity', null, {
        fio: '',
        birthday: null
    }),
    lifecycle({
        componentDidMount() {
            const {isEdit, editId} = this.props;
            if (isEdit) {
                findAuthorById(
                    (entity) => {
                        if (entity.birthday) {
                            entity.birthday = new Date(entity.birthday);
                        }
                        //поля из state сохраняются в пропсы
                        this.setState({entity: {...entity}})
                    },
                    editId
                );
            }
        }
    }),
    withForm
);
export default compose(withHandleForm)(AuthorForm);