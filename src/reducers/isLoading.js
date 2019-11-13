import {actionTypes} from "../constants/actionTypes";

const isLoading = (state = false, action) => {
    switch (action.type) {
        case actionTypes.GET_PEOPLE:
            return true;
        case actionTypes.GET_PEOPLE_SUCCESS:
        case actionTypes.GET_PEOPLE_FAIL:
            return false;
        default:
            return false;
    }
};
export default isLoading;
