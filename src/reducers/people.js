import {actionTypes} from "../constants/actionTypes";

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
                loading: true,
            };
        case actionTypes.GET_PEOPLE_SUCCESS:
            return {
                ...state,
                all: action.payload,
                loading: false,
            };
        case actionTypes.GET_PEOPLE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
