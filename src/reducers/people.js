import {actionTypes} from "../constants/actionTypes";
import keepNotes from "./keepNotes";
import map from 'lodash/fp/map';
import curry from 'lodash/fp/curry';
import flow from 'lodash/fp/flow'
import { reduceInSequence } from '../helpers/functional'
import { mapUrlsToIds} from "./helper";
const people = (state = {
    all: [{
        birth_year: "19 BBY",
        eye_color: "Blue",
        films: [
            "https://swapi.co/api/films/1/",
        ],
        gender: "Male",
        hair_color: "Blond",
        height: 172,
        mass: 77,
    }],
    loading: false,
    error: null,
}, action) => {
    switch (action.type) {
        case actionTypes.GET_PEOPLE:
            return {
                ...state,
            };
        case actionTypes.GET_PEOPLE_SUCCESS:
            const data = action.payload;
           /* const mapStarships =  map((starship)=> {
                return starship[starship.length - 2];
            }, person.starships);*/
           const curriedmapUrlsToIds = curry(mapUrlsToIds);

            return {
                ...state,
                all: {
                    ...data,
                    results: reduceInSequence(
                        curriedmapUrlsToIds('starships'),
                        curriedmapUrlsToIds('films')
                    )(data.results)
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
