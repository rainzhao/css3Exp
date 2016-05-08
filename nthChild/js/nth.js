/**
 * Created by zhaoy on 2016/5/5.
 */
window.onload = function(){
    /*获取id节点*/
    var $ = function(id){
        return document.getElementById(id);
    }
    var add_dt = $("add-dt");//添加dt节点按钮
    var add_dd = $("add-dd");//添加dd节点按钮
    var ele_dl = $("ele-dl");//获取dl节点
    var select_ele = $("select_ele");
    var select_method = $("select_method");
    var selects = document.querySelectorAll("select");//获取所有的select节点
    /*获取css样式信息*/
    for(var i=0;i<selects.length;i++){
        selects[i].onchange = selectChange;
    }
    var input = $("inputText");
    input.onkeyup = function(){
        selectChange();
    }
    function selectChange(){
        var css = 'dl > ' + select_ele.value + ':nth-'
            + select_method.value + '(' + input.value + ')';
        try { document.querySelectorAll(css); } catch(e) { return; }
        var ruleText = document.styleSheets[2].cssRules[0].cssText.replace(/^(.+?)\s+{/, css + ' {');
        //console.log(ruleText)
        document.styleSheets[2].deleteRule(0);
        document.styleSheets[2].insertRule(ruleText, 0);
    }
    /*点击事件*/
    add_dt.onclick = function(){
        addEle_dt();
    }
    add_dd.onclick = function(){
        addEle_dd();
    }
    ele_dl.onclick = function(e){
        this.removeChild(e.target);
    }


    /*添加dt节点*/
    function addEle_dt(){
        var dt = document.createElement("dt");
        ele_dl.appendChild(dt);
    }
    /*添加dd节点*/
    function addEle_dd(){
        var dd = document.createElement("dd");
        ele_dl.appendChild(dd);
    }

    selectChange();
}