import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import find from 'lodash/fp/find';

const allPeople = (state) => get('people.all.results',state);

export const getAllPeopleSelector = createSelector(
    allPeople,
    people => people
);

export const getPersonById = createSelector(
    getAllPeopleSelector,
    people => find((person) => person.id, people)
);
