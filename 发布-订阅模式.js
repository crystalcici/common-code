let event = {
    clientList: {},
    listen (key, fn) {
        if(!this.clientList[key]){
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn)  // 订阅的消息存入缓存列表
    },
    trigger (type, money) {
        let fns = this.clientList[type]
        if(!fns || fns.length ===0){ // 未绑定消息
            return false
        }
        fns.forEach(fn =>{
            fn.apply(this,[money])
        })
    }
}

//定义installEvent函数，用于给多有对象动态安装发布订阅功能

let installEvent = obj => {
    for(let i in event) {
        obj[i] = event[i]
    }
}

// 给售楼处对象salesOffices动态增加发布-订阅功能
let salesOffices = {};
installEvent(salesOffices);

salesOffices.listen('square88',price =>{
    console.log(`xxxx,价格=`+price)
})
salesOffices.trigger('squareMeter88', 2000000)