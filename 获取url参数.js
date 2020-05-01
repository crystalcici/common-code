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
function  URLParser(url){
    const a = document.createElement('a')
    a.href = url;
    return {
        protocol : a.protocol,
        username : a.username,
        password : a.password,
        hostname : a.hostname,
        port : a.port,
        pathname : a.pathname,
        search : a.search,
        hash : a.hash
    }
}