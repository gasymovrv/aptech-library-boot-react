import {compose} from 'recompose';

import {deleteAuthorById, findAuthorsWithPaging} from "../../../api/authorsApi";
import withListActions from "../../../hocs/withListActions";
import withPaging from "../../../hocs/withPaging";
import AuthorList from "./AuthorList";
import withLoadingEntities from "../../../hocs/withLoadingEntities";

const withLoadingPagingListActions = compose(
    withLoadingEntities(findAuthorsWithPaging, true),
    withPaging(6),
    withListActions(deleteAuthorById)
);
export default compose(withLoadingPagingListActions)(AuthorList);