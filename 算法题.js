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
//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
function zeroMove(array) {
    let len = array.length;
    let j = 0;
    for(let i=0;i<len-j;i++){
        if(array[i]===0){
            array.push(0);
            array.splice(i,1);
            i --;
            j ++;
        }
    }
    return array;
}