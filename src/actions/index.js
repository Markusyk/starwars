import {actionTypes} from '../constants/actionTypes';

let id = 0;
export const addKeepNote = (payload) => {
    return {
        id: 'Note' + id++,
        type: actionTypes.ADD_KEEP_NOTE,
        payload,
    };
};
