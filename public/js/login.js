// 登录ajax
function reg_login(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
           var result=xhr.responseText;
            result=JSON.parse(result);
            // console.log(result);
            // console.log(result.slice(8,9));
            //判断密码是否为正确
            if(result.code==1){
                 location.replace('http://127.0.0.1:3001/user.html')
             }else{
                alert(`用户名或密码有误`);
                console.log(result);
            };
        }
    }
    sname=document.getElementById("sname");
    spwd=document.getElementById("spwd");
     xhr.open("get","/user/login?sname="+sname.value+"&spwd="+spwd.value,true);
     xhr.send(null);
     sessionStorage.setItem("sname",sname.value);
     console.log(sname.value);
};
// 绑定回车
document.onkeyup=function(e){
    // console.log(e.keyCode);
    if(e.keyCode==13){
        reg_login();
    }
};

//登录 获取用户名存入session
// var btn=document.querySelector(".btn");
// // console.log(btn);
// btn.onclick=function(){
//     sessionStorage.setItem("sname",sname.value);
// };

