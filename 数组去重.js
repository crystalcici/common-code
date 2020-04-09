//ES6 set 去重
function unique(arr){
    return [...new Set(arr)]
}
//indexOf
function unique(arr) {
    var res = [];
    for(let i=0;i<arr.length;i++){
        let cur = arr[i];
        if(res.indexOf(cur) == -1){
            res.push(cur)
        }
    }
    return res
}
//map
function unique(arr) {
    var map = new Map();
    var res = [];
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            continue
        }else{
            map.set(arr[i],i)
            res.push(arr[i])
        }
    }
    return res
}
//排序后去重
function unique(arr) {
    arr = arr.sort(function (a,b) {return a-b})
    var res=[];
    res.push(arr[0])
    for(var i=1;i<arr.length;i++){
        if(arr[i]==arr[i-1]){
            continue;
        }
        res.push(arr[i])
    }
    return arr[i]
}