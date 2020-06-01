// cb 也就是编译过的 test 函数
function generator(cb) {
    return (function() {
        var object = {
            next: 0,
            stop: function() {}
        };

        return {
            next: function() {
                var ret = cb(object);
                if (ret === undefined) return { value: undefined, done: true };
                return {
                    value: ret,
                    done: false
                };
            }
        };
    })();
}
