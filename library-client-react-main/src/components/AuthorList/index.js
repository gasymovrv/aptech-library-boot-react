import {deleteAuthorById, findAuthorsWithPaging} from "../../api/authorsApi";
import withListActions from "../../hocs/withListActions";
import withPagingEntities from "../../hocs/withPagingEntities";
import AuthorList from "./AuthorList";
import withLoadingEntities from "../../hocs/withLoadingEntities";

//все таки зависят от очередности (в withListActions нужно передать refreshPageAfterDelete)
const withListActionsAndPaging = withLoadingEntities(findAuthorsWithPaging, true)(withPagingEntities(1)(withListActions(deleteAuthorById)(AuthorList)));
export default withListActionsAndPaging;