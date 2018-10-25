import AuthorForm from './AuthorForm';
import withForm from "../../hocs/withForm";
import withHandlers from "../../hocs/withHandlers";
import {saveOrUpdateAuthor} from "../../api/authorsApi";

export default withHandlers({
    onSubmit: props => (data, okFn, errFn) => {
        saveOrUpdateAuthor(data, okFn, errFn);
    }
})(withForm(AuthorForm));