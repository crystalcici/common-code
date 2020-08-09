Function.prototype.myBind = function () {
    //将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)
    //获取this(数组第一项)
    const t = args.shift();
    //fn1.bind 中的fn1,调用方法本身
    const self = this;
    return function () {
        return self.apply(t,args)
    }
}