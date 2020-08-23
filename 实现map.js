function Map() {
    this.container = {};
}
// 放入 key、value
Map.prototype.put = function (key,value) {
    if(key !== null && key !==''){
        this.container[key] = value;
    }
}

// get key value
Map.prototype.get = function (key) {
    return this.container[key]
}

// 判断是否存在指定key
Map.prototype.containsKey = function (key) {
    for (var i in this.container){
        if(i == key) {
            return true
        }
        return false
    }
}

// 判断是否存在指定value
Map.prototype.containsValue = function (value) {
    for (var i in this.container){
        if(this.container[i] == value){
            return true
        }
        return false
    }
}

// 删除指定key
Map.prototype.remove = function (key) {
    delete this.container[key]
}

// 清空map
Map.prototype.clear = function () {
    delete this.container;
    this.container = {}
}

// 判断是否清空
Map.prototype.isEmpty = function () {
    if(this.keySet().length === 0 ){
        return true
    }
    return false
}

// 获取size大小
Map.prototype.size = function () {
    return this.keySet().length
}