Function.prototype.myBind = function (content) {
    //保存当前函数的this
    const fn = this;
    //保存原先参数
    const args = [...arguments].slice(1);
    return function () {
        //再次获取新参数
        const  newArgs = [...arguments];
        return fn.apply(content,args.concat(newArgs))
    }
}