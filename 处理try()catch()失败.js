//
try {
    throw new Error('111')
} catch (e) {
    console.log(1)
}
// 捕捉到异常，输出1

try {
    setTimeout(() => {
throw new Error('222')
    })
} catch (e) {
    console.log(2)
}
// 未能捕捉到异常，不输出2
//
async function A() {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('222'))
            })
        })
    } catch (e) {
        console.log(e)
    }
}