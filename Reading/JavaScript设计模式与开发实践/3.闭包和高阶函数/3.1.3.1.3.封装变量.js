/**
 * Created by zdnexus on 2017/12/10 0010.
 */
'use strict';

var mult = (function () {
    var cache = {};
    var calculate = function () {
        var sum = 1;
        for (var i = 0, l = arguments.length; i < l; i++) {
            sum *= arguments[i];
        }
        return sum;
    };
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            return cache[args];
        }
        // Q:
        return cache[args] = calculate.apply(null, arguments);
        // return cache[args] = calculate.call(null, arguments);
    }
})();

var cache = 1;
console.log(mult(1, 2, 3));// 6
console.log(mult(1, 2, 3));// 6