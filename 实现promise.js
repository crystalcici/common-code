function Promise(executor) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved';
            self.value = value;
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'reject';
            self.reason = reason;
        }
    }

    try {
        executor(resolve, reject)
    } catch (e) {
        console.log(e) //捕获时发生异常直接失败
    }

    //倘若捕获失败
    async function A() {
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error(''))
                })
            })
        } catch (e) {
            console.log(e)
        }
    }
}
    Promise.prototype.then = function (onFuiled,onRejected) {
        let self = this;
        if(self.status === 'resolved'){
            onFuiled(self.value)
        }
        if(self.status === 'rejected'){
            onRejected(self.reason)
        }
    }
module.exports = Promise