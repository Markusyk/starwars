import {actionTypes} from "../constants/actionTypes";
import map from 'lodash/fp/map';
import { mapUrlToId} from "./helper";

const people = (state = {
    all: {
        results: []
    },
}, action) => {
    switch (action.type) {
        case actionTypes.GET_PEOPLE:
            return {
                ...state,
            };
        case actionTypes.GET_PEOPLE_SUCCESS:
            const data = action.payload;
            let personId = 0;
            return {
                ...state,
                all: {
                    ...data,
                    results: map((item, index) => {

                        return {
                            ...item,
                            id: ++personId,
                            starshipsIds: map(mapUrlToId, item.starships),
                            planetId: mapUrlToId(item.homeworld)
                        }
                    }, data.results),
                },
            };
        case actionTypes.GET_PEOPLE_FAIL:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default people;
