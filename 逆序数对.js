var sum = 0;
var nums = [4,7,3,2,1,5,11,8]
var reversePairs = function(nums) {
    // 归并排序
    let sum = 0 ;

    function mergeSort(nums){
        var len = nums.length;
        if(len<=1){
            return nums
        }
        var mid = Math.floor(len/2);
        var left = nums.slice(0,mid);
        var right = nums.slice(mid);
        return merge(mergeSort(left),mergeSort(right))
    }
    function merge(left,right){
        var res = [];
        while(left.length && right.length){
            while(left[0]===right[0]){
                res.push(left.shift())
            }
            if(left[0]<right[0]){
                res.push(left.shift())
            }else if(left[0]>right[0]){
                res.push(right.shift())
                sum += left.length
            }
        }
        return res.concat(left,right)
    }
    mergeSort(nums);
    return sum
};
var result = mergeSort(arr)
console.log(sum)
