import AuthorInfo from "./AuthorInfo";
import {compose} from "recompose";
import {deleteAuthorById, findAuthorById} from "../../../api/authorsApi";
import withDeleting from "../../../hocs/withDeleting";
import withFindById from "../../../hocs/withFindById";

export default compose(
    withFindById(findAuthorById),
    withDeleting(deleteAuthorById)
)(AuthorInfo);