"use strict";
// 该函数将数组的每个元素转换为一个promise对象，并组成新的数组返回
function promisedMapping(ary) {
    function timerPromisefy(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value);// => return值
            }, value);
        });
    }
    return ary.map(timerPromisefy);
}
module.exports = promisedMapping;