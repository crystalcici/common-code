//闭包隐藏数据，只提供api
function  createCache() {
    const data = {} //闭包中的数据，被隐藏，不被外界访问
    return {
        set:function (key,val) {
            data[key] = val
        },
        get:function (key) {
            return data[k]
        }
    }
}
const c = createCache();
c.set('a',100);
c.get('a')