Promise._race = promises => new Promise((resolve, reject) => {
    promises.forEach(promise => {
        promise.then(resolve, reject)
    })
})