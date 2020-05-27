//对象字面量的方式
person={firstname:"Mark",lastname:"Yun",age:25,eyecolor:"black"};
//function构造
function Person() {}
    var person = new Person();
    person.name = "Mark";
    person.age = "25";
    person.work = function () {
        alert(person.name + " hello...");
    }
    person.work();
//用function来模拟参构造函数来实现
function Pet(name,age,hobby){
    this.name=name;//this作用域：当前对象
    this.age=age;
    this.hobby=hobby;
    this.eat=function(){
        alert("我叫"+this.name+",我喜欢"+this.hobby+",是个程序员");
    }
}
var maidou =new Pet("麦兜",25,"coding");//实例化、创建对象
maidou.eat();//调用eat方法
