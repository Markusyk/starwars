import { put, takeEvery, all } from 'redux-saga/effects'

import axios from "../http/star-wars-default-config";
import {getPeopleSuccess, getPeople as getPeopleAction, getPeopleFail} from "../actions";

function* getPeople() {
    try {
        const response = yield axios.get('/people/');
        yield put( getPeopleSuccess(response.data) );
    } catch(err) {
        console.log(err)
        yield put( getPeopleFail(err) );
    }
}

function*  watchGetPeopleAction() {
    yield takeEvery(getPeopleAction().type, getPeople);
}

export default function* rootSaga() {
    yield all([
        watchGetPeopleAction(),
    ]);
}
