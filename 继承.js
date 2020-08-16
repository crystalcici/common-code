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
//寄生组合继承
function Person(name) {
    this.name = name
}
Person.prototype.sayName = function () {

}                                            // 公有方法
function Student() {
    Person.call(this,name)
    this.grade = grade;
}
Student.prototype = new Person();
Student.prototype.constructor = Student;
//Class 继承
class Animal{
    constructor(color){
        this.color = color
    }
}
class Dog extends Animal{
    constructor(color,name) {
        super(color);
        this.name = name
    }
}
