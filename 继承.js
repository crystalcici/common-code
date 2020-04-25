//原型链继承
function Super() {
    this.num=[1,2,3]
}
Super.prototype.show=function () {
    console.log('show')
}
function child() {

}
child.prototype = new Super();
var c1 = new child()
//构造函数实现
function Super() {
    this.name = "lls"
}
function child() {
    this.age = 1;
    Super.call(this)
}
var a = new child();
console.log(a.name);