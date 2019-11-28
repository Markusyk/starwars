import {actionTypes} from '../constants/actionTypes';

let id = 0;
export const addKeepNote = (payload) => {
    return {
        id: 'Note' + id++,
        type: actionTypes.ADD_KEEP_NOTE,
        payload,
    };
};

export const getPeople = () => {
  return  {
      type: actionTypes.GET_PEOPLE,
  }
};

export const getPerson = (id) => {
    return {
        type: actionTypes.GET_PERSON,
        payload: {
             id
        }
    }
};
export const getPersonSuccess = (payload) => {
    return {
        type: actionTypes.GET_PERSON_SUCCESS,
        payload
    }
};

export const getPersonFail = (error) => {
    return {
        type: actionTypes.GET_PERSON_FAIL,
        error
    }
};

export const getPeopleSuccess = (payload) =>{
    return  {
        type: actionTypes.GET_PEOPLE_SUCCESS,
        payload,
    }
};

export const getPeopleFail = (error) =>{
    return  {
        type: actionTypes.GET_PEOPLE_FAIL,
        error,
    }
};


