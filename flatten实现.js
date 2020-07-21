function wrap(){
    var ret=[];
    return function flat(a){
        for(var item of a){
            if(item.constructor===Array){
                ret.concat(flat(item))
            }else{
                ret.push(item)
            }
        }
        return ret
    }
}