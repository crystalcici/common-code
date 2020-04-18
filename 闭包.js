//函数作为返回值
function create() {
    const a = 100;
    return function () {
        console.log(a)
    }
}
const fn = create()
const a = 200
fn() //100

//函数作为参数
function print(fn2) {
    const b = 200;
    fn2()
}
const b =100;
function fn2() {
    console.log(b)
}
print(fn2) //100
//闭包:自由变量的查找，是在函数定义的地方，向上级作用域查找
//不是在执行的地方