import map from 'lodash/fp/map';


export const  mapUrlToId = (el) => {
     const splittedString = el.split('/');
    return splittedString[splittedString.length - 2];
};

export const  mapUrlsToIds = (entityName, data) => {
    return map(item => {
        return {
            ...item,
            [entityName]: map(mapUrlToId , item[entityName])
        }
    }, data);
} ;

