function promiseAll(promises) {
    return new Promise(function (resolve,reject) {
        if(!isArray(promises)){
            return reject(new TypeError('arguments must be an array'));
        }
        let result = [];
        let count = 0;
        promises.forEach((promise,index)){
            (res)=>{
                result[index] = res;
                count++;
                count === promises.length && resolve(result)
            }, (err)=>{
                reject(err)
            }
        }
    })
}
