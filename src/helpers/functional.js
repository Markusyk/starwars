export const reduceInSequence = function(/*funcs*/) {
    const funcs = Array.prototype.slice.call(arguments);
    return function (val) {
       return funcs.reduce(function (previousFunctionCall, current) {
           return [...previousFunctionCall(val), current];
        });
    };
};
