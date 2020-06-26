var arr = [[1], [2,3,4], [5,[2,3]], [7], [0,[1,2,3,4],3,5], [1,3], [3,2,4]];
function depth(arr) {
    var a = JSON.stringify(arr);
    var res = [];
    for(var i =0;i<a.length;i++){
        if(a[i]=='['||a[i]==']'){
            res.push(a[i])
        }
    }
    var res1 = [];
    var num = 1 ;
    for(var i = 2;i<res.length;i++){
        if(res[i]===res[i-1]){
            res1.push(res[i-1])
            num = Math.max(num,res1.length+1)
        }else{
            res1 = [];
            res1.push(res[i])
        }
    }
    console.log(num)
}
depth(arr)
