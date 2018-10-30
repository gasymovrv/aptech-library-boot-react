import {compose} from "recompose";

import BookList from "./BookList";
import {findBooksWithPaging} from "../../../api/booksApi";
import withPaging from "../../../hocs/withPaging";
import withLoadingEntities from "../../../hocs/withLoadingEntities";

const withLoadingPaging = compose(
    withLoadingEntities(findBooksWithPaging, true),
    withPaging(3)
);
export default compose(withLoadingPaging)(BookList);