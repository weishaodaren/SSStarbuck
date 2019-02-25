 //ajax发送get请求
        function reg_user(){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                var user=JSON.parse(result);
                console.log(user);
                if(user.code==200){
                location.replace("http://127.0.0.1:3001/user.html");
                }else{
                    alert(`注册信息有误`);
                }
                
            }
        }
         xhr.open("post","/user/register",true);
        var sgender="";
       if(sgender1.checked){
           sgender=1;
       }else{
        sgender=0;
       }
        sname=document.getElementById("sname");
        supwd=document.getElementById("supwd");
        semail=document.getElementById("semail");
        sphone=document.getElementById("sphone");
        sgender=document.querySelectorAll(".sgender");
         var formdata="sname="+sname.value+"&supwd="+supwd.value+"&semail="+semail.value+"&sphone="+sphone.value+"&sgender="+sgender.value;
        //设置请求头
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //console.log(formdata);
        xhr.send(formdata);
        sessionStorage.setItem("sname",sname.value);
        console.log(sname.value);
    }

//注册 获取用户名存入session
// var btn=document.querySelector(".btn");
// btn.onclick=function(){
//     sessionStorage.setItem("sname",sname.value);
// };


    //用户名密码框鼠标获取焦点事件 
    var txtName=document.getElementsByName("sname")[0];
    var txtPwd=document.getElementsByName("supwd")[0];
    var txtPwd1=document.getElementsByName("supwd")[1];
    var txtEmil=document.getElementsByName("semail")[0];
    var txtTel=document.getElementsByName("sphone")[0];
   // console.log(txtName,txtPwd);
    txtName.onfocus=txtPwd.onfocus=txtPwd1.onfocus=txtEmil.onfocus=txtTel.onfocus=function(){
        this.className="txt_focus";
    };
    txtName.onblur=txtPwd.onblur=txtPwd1.onblur=txtEmil.onblur=txtTel.onblur=function(){
        this.className="";
    }
    // ---------------------------------------------------------------------------------------------------------------------------------
    // 失去焦点，正则表达式--sanme
    var tdName=document.getElementsByClassName("reg_right")[0];
    var F_tdName=tdName.nextElementSibling;
   txtName.onblur=function(){
    var regName=/^[\u4e00-\u9fa5]{1,6}$/;
if(regName.test(txtName.value)){
       tdName.className="";
       F_tdName.className="reg_fault";
}else{
    F_tdName.className="";
    tdName.className="reg_right";
}
}
//   显示提示
var tishiName=document.getElementsByClassName("d_none")[0];
txtName.onclick=function(){
    tishiName.className="";
}

    //失去焦点，正则表达式----supwd
    var tdPwd=document.getElementsByClassName("reg_right")[1];
    var F_tdPwd=tdPwd.nextElementSibling;
   txtPwd.onblur=function(){
    var regPwd=/[a-z]+[0-9_-]+/i;
if(regPwd.test(txtPwd.value)){
       tdPwd.className="";
       F_tdPwd.className="reg_fault";
}else{
    F_tdPwd.className="";
    tdPwd.className="reg_right";
}
}
//   显示提示
var tishiPwd=document.getElementsByClassName("d_none")[1];
txtPwd.onclick=function(){
    tishiPwd.className="";
}

 //失去焦点，正则表达式----确认密码
 var tdPwd1=document.getElementsByClassName("reg_right")[2];
    var F_tdPwd1=tdPwd1.nextElementSibling;
   txtPwd1.onblur=function(){
if(txtPwd1.value==txtPwd.value){
       tdPwd1.className="";
       F_tdPwd1.className="reg_fault";
}else{
    F_tdPwd1.className="";
    tdPwd1.className="reg_right";
}
}
//   显示提示
var tishiPwd1=document.getElementsByClassName("d_none")[2];
txtPwd1.onclick=function(){
    tishiPwd1.className="";
}

 //失去焦点，正则表达式----semail
 var tdEml=document.getElementsByClassName("reg_right")[3];
    var F_tdEml=tdEml.nextElementSibling;
   txtEmil.onblur=function(){
    var regEml=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
if(regEml.test(txtEmil.value)){
       tdEml.className="";
       F_tdEml.className="reg_fault";
}else{
    F_tdEml.className="";
    tdEml.className="reg_right";
}
}
//   显示提示
var tishiEml=document.getElementsByClassName("d_none")[3];
txtEmil.onclick=function(){
    tishiEml.className="";
}

//   失去焦点，正则表达式----stel
 var tdTel=document.getElementsByClassName("reg_right")[4];
    var F_tdTel=tdTel.nextElementSibling;
   txtTel.onblur=function(){
    var regTel=/^((\+86|0086)\s+)?1[3-8]\d{9}$/;
if(regTel.test(txtTel.value)){
       tdTel.className="";
       F_tdTel.className="reg_fault";
}else{
    F_tdTel.className="";
    tdTel.className="reg_right";
}
}
//   显示提示
var tishiTel=document.getElementsByClassName("d_none")[4];
txtTel.onclick=function(){
    tishiTel.className="";
}


// 重置刷新
function repeat(){
    history.go(0);
}
// 点击a标签，下边框变色
var sLogin=document.getElementById("sLogin");
//console.log(sLogin);
sLogin.onclick=function(){
    this.className="a_click";
};
var sRegister=sLogin.parentNode.nextElementSibling.children[0];
sRegister.onclick=function(){
    this.className="a_click";
};
var sClub=sRegister.parentNode.nextElementSibling.children[0];
sClub.onclick=function(){
    this.className="a_click";
};

