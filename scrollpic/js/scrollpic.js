/**
 * Created by zhaoy on 2016/5/25.
 */
window.onload = function(){
    var $id = function(id){return document.getElementById(id);}//用于获取元素的id
    var $cls = function(clsname){return document.querySelectorAll("."+clsname);}//用于获取元素的class
    var pics = $cls("pics")[0];
    var prev = $id("prev");
    var next = $id("next");
    var lis = pics.getElementsByTagName("li");
    next.onclick = toForward;
    prev.onclick = toBack;

    function toForward(){
        animate(-520);

    }
    function toBack(){
        animate(520);
    }
    function animate(twards){
        var newleft = parseInt(pics.style.left) + twards;
        var time = 300;
        var inteval = 10;
        var speed = twards/(time/inteval);

        function go(){
            if ( (speed > 0 && parseInt(pics.style.left) < newleft) || (speed < 0 && parseInt(pics.style.left) > newleft)) {
                pics.style.left = parseInt(pics.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }else{
                pics.style.left = newleft + 'px';
                if(newleft>-200){
                    pics.style.left = -2600 + 'px';
                }
                if(newleft<(-2600)) {
                    pics.style.left = '-520px';
                }
            }
        }
        go();
    }
}