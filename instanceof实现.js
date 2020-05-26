function instance_of(Obj,Constructor) {
    let implicitPrototype = Obj.__proto__;// 隐式原型
    let displayPrototype = Constructor.prototype;// 显式原型
    while(true){
        if(implicitPrototype === null){
            return false
        }else if(implicitPrototype === displayPrototype){
            return true
        }
        implicitPrototype = implicitPrototype.__proto__
    }
}
