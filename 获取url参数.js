//传统方式
function query(url) {
    const search = location.search.substr(1)
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
    const res = search.match(reg)
    if(res === null){
        return null
    }
    return res[2]
}
//根据api
//scheme://host:post/path?query#fragment
//http://127.0.0.1:8881/01-hash.html?a=100&b=20#/aaa/bbb
function  URLParser(url){
    const a = document.createElement('a')
    a.href = url;
    return {
        protocol : a.protocol,              //'http:' 协议
        hostname : a.hostname,              //'127.0.0.1' 当前url主机名
        host: a.host,                       //'127.0.0.1:8881' 主机名和url端口号
        port : a.port,                      //'8881'    端口号
        pathname : a.pathname,              //'01-hash.html'   目录
        search : a.search,                  //'?a=100&b=20'  从?开始部分
        hash : a.hash                       //'#/aaa/bbb' 信息片段
    }
}
