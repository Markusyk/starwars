export const reduceInSequence = function(/*funcs*/) {
    const funcs = Array.prototype.slice.call(arguments);
    return function (val) {
       return funcs.reduce(function (previousFunctionCall, current) {
           return [...previousFunctionCall(val), current];
        });
    };
};

export const  alt = function (func1, func2) {
    return function (val) {
        return func1(val) || func2(val);
    }
};
