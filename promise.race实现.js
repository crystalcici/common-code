Promise.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(function(value) {
                return resolve(value)
            }, function(reason) {
                return reject(reason)
            })
        }
    })
}