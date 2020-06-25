//现在有个 HTML 片段，要求编写代码，点击编号为几的链接就alert弹出其编号？
//<ul>
//
//     <li>编号1，点击我请弹出1</li>
//
//     <li>2</li>
//
//     <li>3</li>
//
//     <li>4</li>
//
//     <li>5</li>
//
// </ul>
var list  = document.getElementsByTagName('li');
for(var i=o;i<list.length;i++){
    list[i].addEventListener('click',function (i) {
        return function () {
            alert(i+1)
        }
    }(i),true)
}
//闭包打印1-9
for(var i=0;i<10;i++){
    setTimeout((function(i){
        return () => {
            console.log(i)
        }
    })(i),1000*i)
}

