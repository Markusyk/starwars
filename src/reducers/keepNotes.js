import  {actionTypes } from '../constants/actionTypes';
const  keepNotes = (state = [{
    id: 1,
    title: 'Title',
    desc: 'Description',
    tags: [{
        id: 0,
        name: 'My'
    }],
    importancy: 1
}], action) => {
    switch (action.type) {
        case actionTypes.ADD_KEEP_NOTE:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.payload.title,
                    desc: action.payload.desc,
                    tags: action.payload.tags ? action.payload.tags : [],
                    importancy: action.payload.importancy,
                }
            ];
        default:
            return state;
    }
};

export default keepNotes;
