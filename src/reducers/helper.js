import map from 'lodash/fp/map';

// related entity comes as endpoint not as ID, so it's better to have ID's in
// the reducer
export const  mapUrlToId = (el) => {
     const splittedString = el.split('/');
    return splittedString[splittedString.length - 2];
};

// TODO: redo this function, so it can be reused in reducer GET_PEOPLE_SUCCESS
export const  mapUrlsToIds = (data, entityName) => {
    return map(item => {
        return {
            ...item,
            [entityName]: map(mapUrlToId , item[entityName])
        }
    }, data);
} ;

