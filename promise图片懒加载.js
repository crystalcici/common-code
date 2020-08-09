function loadImg (src) {
    var promise = new Promise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject('图片加载失败')
        }
        img.scr = src
    })
    return promise;
}
var result = loadImg('www.baidu.com')