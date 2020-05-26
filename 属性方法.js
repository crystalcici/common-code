function User(name){
    var name = name;   //私有属性
    this.name = name ; //共有属性
    function getName() {

    }  //私有方法
    User.prototype.getName = function(){

    }   // 公有方法
    User.name = '' ;   //静态属性
    User.getName = function () {

    }   //静态方法
}

//私有属性
