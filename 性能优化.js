//题⽬目：找出下⾯面代码的优化点，并且优化它
//var data = ['string1', 'string2', 'string3'];
// for(var i = 0; i < data.length; i++){
// var dom = document.getElementById('list');
// dom.innerHTML += '<li>' + data[i] + '</li>';
// }
var data = ['string1', 'string2', 'string3'];
var dom = document.getElementById('list');
var frag =document.createDocumentFragment();
for(var i=0;i<data.length;i++){
    var li = document.createElement('li')
    li.innerHTML = data[i];
    frag.appendChild((li))
}
listNode.appendChild(frag)
