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
//http://127.0.0.1:8881/01-hash.html?a=100&b=20#/aaa/bbb
function  URLParser(url){
    const a = document.createElement('a')
    a.href = url;
    return {
        protocol : a.protocol,              //'http:'
        hostname : a.hostname,              //'127.0.0.1'
        host: a.host,                       //'127.0.0.1:8881'
        port : a.port,                      //'8881'
        pathname : a.pathname,              //'01-hash.html'
        search : a.search,                  //'?a=100&b=20'
        hash : a.hash                       //'#/aaa/bbb'
    }
}
