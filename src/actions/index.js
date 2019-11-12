import {actionTypes} from '../constants/actionTypes';

let id = 0;
export const addKeepNote = (payload) => {
    return {
        id: 'Note' + id++,
        type: actionTypes.ADD_KEEP_NOTE,
        payload,
    };
};

export const getPeople = (payload) => {
  return  {
      type: actionTypes.GET_PEOPLE,
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
        type: actionTypes.GET_PEOPLE_SUCCESS,
        error,
    }
};
