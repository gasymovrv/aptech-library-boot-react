import BookList from "./BookList";
import {findBooksWithPaging} from "../../api/booksApi";
import withPagingEntities from "../../hocs/withPagingEntities";
import withLoadingEntities from "../../hocs/withLoadingEntities";


export default withLoadingEntities(findBooksWithPaging, true)(withPagingEntities()(BookList));