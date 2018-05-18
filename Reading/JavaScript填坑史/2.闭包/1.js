/**
 * Created by zhongdong on 18/5/18.
 *
 * url:https://segmentfault.com/a/1190000004093058
 */
// 'use strict';

// 1.闭包就是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在。
// 2.闭包就是就是函数的“堆栈”在函数返回后并不释放，我们也可以理解为这些函数堆栈并不在栈上分配而是在堆上分配。
// 3.当在一个函数内定义另外一个函数就会产生闭包。
// 4.指有权访问另外一个函数作用域中的变量的函数。

// 变量的作用域无非就是两种：全局变量和局部变量。
// Javascript语言的特殊之处，就在于函数内部可以直接读取全局变量。


var n = 999;
function f1() {
    console.log(n);
}
f1(); // 999


// function f2() {
//     n2 = 999;
// }
// f2();
// console.log(n2); // 999