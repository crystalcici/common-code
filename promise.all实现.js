Promise.all = function(promises) {
    return new Promise(function(resolve, reject) {
        var resolvedCounter = 0
        var promiseNum = promises.length
        var resolvedValues = new Array(promiseNum)
        for (var i = 0; i < promiseNum; i++) {
            (function(i) {
                Promise.resolve(promises[i]).then(function(value) {
                    resolvedCounter++
                    resolvedValues[i] = value
                    if (resolvedCounter == promiseNum) {
                        return resolve(resolvedValues)
                    }
                }, function(reason) {
                    return reject(reason)
                })
            })(i)
        }
    })
}