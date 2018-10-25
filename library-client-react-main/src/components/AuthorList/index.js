import {deleteAuthorById, findAuthorsWithPaging} from "../../api/authorsApi";
import withListActions from "../../hocs/withListActions";
import withPagingEntities from "../../hocs/withPagingEntities";
import AuthorList from "./AuthorList";

//все таки зависят от очередности (в withListActions нужно передать refreshPageAfterDelete)
const withListActionsAndPaging = withPagingEntities(findAuthorsWithPaging)(withListActions(deleteAuthorById)(AuthorList));
export default withListActionsAndPaging;