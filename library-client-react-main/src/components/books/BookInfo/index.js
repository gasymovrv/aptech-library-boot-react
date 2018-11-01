import BookInfo from "./BookInfo";
import {compose, lifecycle, withStateHandlers} from "recompose";
import {findBookById} from "../../../api/booksApi";
import withFindById from "../../../hocs/withFindById";

export default compose(
    withFindById(findBookById)
)(BookInfo);