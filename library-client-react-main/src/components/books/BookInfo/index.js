import BookInfo from "./BookInfo";
import {compose, withHandlers, withState} from "recompose";
import {findBookById} from "../../../api/booksApi";
import withFindById from "../../../hocs/withFindById";

export default compose(
    withState('activeTab', 'setActiveTab', 1),
    withHandlers({
        onToggleTab: props => (tab) => (event) =>{
            props.setActiveTab(tab);
        }
    }),
    withFindById(findBookById)
)(BookInfo);