// 鼠标单击显示页面  左侧导航栏
var click_tit=document.getElementById("click_tit").firstChild;
// console.log(click_tit);
var div=document.querySelector(".div_p_user");
// console.log(div);
click_tit.onclick=function(){
    this.className="d-none";
  this.nextElementSibling.classList.remove("d-none");
  div.classList.add("d-none");
  close.classList.remove("d-none");
};
// 鼠标再次点击返回页面
var close=document.querySelector(".close");
close.onclick=function(){
    // this.className="d-none";
    click_tit.nextElementSibling.classList.add("d-none");
    div.classList.remove("d-none");
    click_tit.classList.remove("d-none");
};

//获取当前时间 上午 下午 晚上
var time=new Date();
var time=time.toLocaleTimeString();
var time=time.slice(0,2);
// console.log(time);

//从session获取用户名 
var sname1=sessionStorage.getItem("sname");
console.log(sname1);
var username=div.firstElementChild.firstElementChild;
// console.log(username);
var html=time+"好！  "+sname1+"  🙌";
username.innerHTML=html;

// 登出 清除session缓存
function logout(){
    sessionStorage.clear();
    location.replace("http://127.0.0.1:3001");
};