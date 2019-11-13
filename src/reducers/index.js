import keepNotes from "./keepNotes";
import people from "./people";
import { combineReducers } from 'redux'
import isLoading from "./isLoading";

export default combineReducers({
    keepNotes,
    people,
    isLoading,
});
