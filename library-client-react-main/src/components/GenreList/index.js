import GenreList from "./GenreList";
import {findAllGenres} from "../../api/genresApi";
import withLoadingEntities from "../../hocs/withLoadingEntities";


export default withLoadingEntities(findAllGenres)(GenreList);