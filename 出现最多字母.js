var str = 'abcdsbbbaasdadadadfad'
var arr = Array.from(str)
var obj ={}
for(var i = 0; i< str.length; i++){
    var key = str[i];
    if(!obj[key]){
        obj[key] = 1;
    }else{
        obj[key] ++;
    }
}
var max =0;
var string = '';
for(var key in obj){
    if(max<obj[key]){
        max = obj[key]
        string = key
    }
}
console.log(max);
console.log(string)
