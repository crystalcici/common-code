const imgs = document.querySelectorAll('img');
let begin =0;
function lazyLoad() {
    for(let index = begin;index<imgs.length;index++){
        const img = imgs[index];
        if(img.offsetTop < document.documentElement.clientHeight+document.documentElement.scrollTop){
            begin = index;//已加载图片截断
            img.src = img.getAttribute("imgPath")
        }
    }
}
lazyLoad();//渲染首屏
window.onscroll = lazyLoad();
/*代码优化*/
function throttle(lazyTime,Fuc) {
    var lastTime = null; //上次记录时间
    return function () {
        if(!lastTime){
            lastTime = currentTime;
        }
        if(lastTime+lazyTime<currentTime){
            Fuc();
            lastTime = currentTime;
        }
    }
}
window.onscroll = throttle(50,lazyLoad)