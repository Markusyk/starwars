import keepNotes from "./keepNotes";
import people from "./people";
import { combineReducers } from 'redux'

export default combineReducers({
    keepNotes,
    people
});
