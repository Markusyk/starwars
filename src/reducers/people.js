import {actionTypes} from "../constants/actionTypes";
import map from 'lodash/fp/map';
import get from 'lodash/get';
import flow from 'lodash/flow';
import { mapUrlToId} from "./helper";

const people = (state = {
    all: {
        results: []
    },
    filters: {}
}, action) => {
    switch (action.type) {
        case actionTypes.GET_PEOPLE:
            return {
                ...state,
            };
        case actionTypes.GET_PEOPLE_SUCCESS:
            const data = action.payload;

            return {
                ...state,
                all: {
                    ...data,
                    results: map((item) => {
                        return {
                            ...item,
                            visible: true,
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
        case actionTypes.FILTER_PEOPLE_BY_MASS:
            const [min, max] = get(action, 'payload.mass');
            const mapped =  flow(
            map((item) => {
                    const isBetweenMinAndMax = Number(item.mass) >=  Number(min) &&  Number(item.mass) <= Number(max);
                    return !isBetweenMinAndMax ? {...item, visible: false} : { ...item, visible: true};
                  }),
                )(state.all.results);
            return {
               ...state,
                all: {
                   ...state.all,
                    results: mapped,
                },
                filters: get(action, 'payload'),
             };
        default:
            return state;
    }
};
export default people;
