//[2, 10, 3, 4, 5, 11, 10, 11, 20] => [[2, 3, 4, 5], [10, 11], [20]]
let newAry = []
for (let i = 0; i < ary.length; i++) {
    let tmpAry = [ary[i]]
    // index用于跳过已经处理过的数组元素
    let index = ary.length
    for (let j = i + 1, count = 1; j < ary.length; j++, count++) {
        if (ary[i] + count === ary[j]) {
            tmpAry.push(ary[j])
        } else {
            index = j - 1
            break
        }
    }
    i = index
    // debugger
    newAry.push(tmpAry)
}