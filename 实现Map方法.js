//定义Map方法
function Map() {
    var struct = function (key,value) {
        this.key = key;
        this.value = value
    }
}
//写set方法
//添加map键值对
var set = function (key,value) {
    //遍历数组，如果存在，则进行覆盖
    for(var i=0;i<this.arr.length;i++){
        if(this.arr[i].key === key){
            this.arr[i].value =value;
            return
        }
    };
    this.arr[this.arr.length] = new struct(key,value)
}
//写get方法
var get = function (key) {
    for(var i=0;i<this.arr.length;i++){
        if(this.arr[i].key===key){
            return this.arr[i].value
        }
    }
    return null
}
//写remove方法
//根据key删除
var remove = function (key) {
    for(var i=0;i<this.arr.length;i++){
        v=this.arr.pop();
        if(v.key ===key){
            continue;
        }
        this.arr.unshift(v)
    }
}
//写size和isEmpty方法
//获取map键值对个数
var size = function () {
    return this.arr.length
};
var isEmpty = function () {
    return this.arr.length <=0
}