/**
 * Created by zhongdong on 18/5/18.
 */
// 'use strict';

// 1.理解闭包:如何去访问函数内部的变量
// function f1() {
//     var n = 999;
//
//     function f2() {
//         console.log(n);
//     }
//
//     return f2;
// }
//
// var result = f1();
//
// result(); // 999
// 函数中的f2函数就是闭包，就是通过建立函数来访问函数内部的局部变量。


// 2.闭包的用途:一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
// function f1() {
//     var n = 999;
//     nAdd = function () {
//         n += 1
//     };
//     function f2() {
//         console.log(n);
//     }
//
//     return f2;
// }
//
// var result = f1();
//
// result(); // 999
// nAdd();
// result(); // 1000
// 函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。
// 原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，
// 因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。


// 3.闭包的注意点:
// 3.1:由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。
// 解决方法是，在退出函数之前，将不使用的局部变量全部删除。
// 3.2:闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。
