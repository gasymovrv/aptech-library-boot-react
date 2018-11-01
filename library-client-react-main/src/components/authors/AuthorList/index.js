import {compose} from 'recompose';

import {deleteAuthorById, findAuthorsWithPaging} from "../../../api/authorsApi";
import withDeleting from "../../../hocs/withDeleting";
import withPaging from "../../../hocs/withPaging";
import AuthorList from "./AuthorList";
import withLoadingEntities from "../../../hocs/withLoadingEntities";

const withLoadingPagingListActions = compose(
    withLoadingEntities(findAuthorsWithPaging, true),
    withPaging(6),
    withDeleting(deleteAuthorById)
);
export default compose(withLoadingPagingListActions)(AuthorList);