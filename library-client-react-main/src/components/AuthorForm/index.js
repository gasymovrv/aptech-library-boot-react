import {compose, lifecycle, withHandlers, withState} from 'recompose';

import AuthorForm from './AuthorForm';
import withForm from "../../hocs/withForm";
import {findAuthorById, saveOrUpdateAuthor} from "../../api/authorsApi";
import moment from "moment/moment";

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
            const {isEdit, match} = this.props;
            if (isEdit) {
                findAuthorById(
                    (entity) => {
                        if (entity.birthday) {
                            entity.birthday = moment(Date.parse(entity.birthday));
                        }
                        //поля из state сохраняются в пропсы
                        this.setState({entity: {...entity}})
                    },
                    match.params.id
                );
            }
        }
    }),
    withForm
);
export default compose(withHandleForm)(AuthorForm);