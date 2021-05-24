(
    function(){
    var ajax_=new XMLHttpRequest()||new ActiveXObject();

    ajax_.open('get','./js/9.json',true);
    ajax_.send();
    ajax_.onreadystatechange=function(){
        if(ajax_.readyState==4){
            if(ajax_.status==200){
                var data=JSON.parse(ajax_.responseText);
                console.log(data);
                console.log('成功');
                var tmpText=doT.template(document.getElementById('tmpy').innerHTML);
                document.getElementById('tutuy').innerHTML=tmpText(data);
            }else{
                console.log('失败');
            }
        }
    }
} 
)();

