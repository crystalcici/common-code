function jsonp(url,params,callback) {
    //判断是否含有参数
    let queryString = url.indexOf("?") ==="-1" ? "?":"&"
    //添加参数
    for (var k in params){
        if(params.hasOwnProperty(k)){
            queryString += k + "=" +params[k] + "&"
        }
    }
    //处理回调函数名
    let random = Math.random()
        .toString()
        .replace(".",""),
        callbackName = "myJsonp" +random;
    //添加回调函数
    queryString += "callback=" + callbackName;
    // 构建请求
    let scriptNode = document.createElement("script");
    scriptNode.src = url + queryString;

    window[callbackName] = function() {
        // 调用回调函数
        callback(...arguments);

        // 删除这个引入的脚本
        document.getElementsByTagName("head")[0].removeChild(scriptNode);
    };

    // 发起请求
    document.getElementsByTagName("head")[0].appendChild(scriptNode);
}