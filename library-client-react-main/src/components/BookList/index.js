import BookList from "./BookList";
import {findBooksWithPaging} from "../../api/booksApi";
import withPagingEntities from "../../hocs/withPagingEntities";


export default withPagingEntities(findBooksWithPaging)(BookList);