class jquery{
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length;
        for(var i=0;i<length;i++){
            this[i]=result[i]
        }
        this.length = length
    }
    get(index) {
        return this[index]
    }   //返回第几个dom元素
    each(fn){
        for(let i=0;i<length;i++){
            const ele = this[i]
            fn(ele)
        }
    }
    on(type, fn){
        return this.each(ele => {
            ele.addEventListener(type,fn,false)
        })
    }
}