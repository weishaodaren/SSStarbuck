// 登录ajax
function reg_login(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
           var result=xhr.responseText;
            // console.log(result);
            console.log(result.slice(8,9));
            var res_i=result.slice(8,9);
            // 判断密码是否为正确
            if(res_i==1){
                 location.replace('http://127.0.0.1:3001/index.html')
             }else{
                alert(`用户名或密码有误`);
            };
        }
    }
     xhr.open("get","/user/login?sname="+sname.value+"&spwd="+spwd.value,true);
     xhr.send(null);
};
// 绑定回车
document.onkeyup=function(e){
    console.log(e.keyCode);
    // e=e||window.event;
    // e.preventDefault();
    if(e.keyCode==13){
        reg_login();
    }
};
