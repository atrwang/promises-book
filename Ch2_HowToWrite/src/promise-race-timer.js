"use strict";
var timerPromisefy = require("../lib/timer-promisefy").timerPromisefy;
// 任何一个promise变为resolve或reject 的话程序就停止运行
Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
]).then(function (value) {
    console.log(value); // => 1
});


