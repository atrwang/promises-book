"use strict";
function addDelay(value, ms) {
    // 此函数接收一个promise对象作为参数
    function addDelayToPromise(promise, ms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(promise)
            }, ms);
        });
    }

    return Promise.resolve(value).then(function (promise) {
        // `value` 必须为promise对象
        return addDelayToPromise(promise, ms);
    });
}
module.exports.addDelay = addDelay;