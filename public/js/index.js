// 鼠标单击显示页面
var click_tit=document.getElementById("click_tit").firstChild;
// console.log(click_tit);
var div=document.querySelector(".div_p");
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
// 查找border_l
var border=document.querySelector(".border_l");
// console.log(border);
// 点击浮动搜索框
var click_btn=document.querySelector(".flex_menu");
var disappear=document.getElementById("disappear");
var bottomAd=document.getElementById("bottomAd");
if(click_btn){
click_btn.onclick=function(){
    this.classList.add("d-none");
    this.nextElementSibling.classList.remove("d-none");
    disappear.classList.add("d-none");
    bottomAd.classList.remove("d-none");
    border.classList.remove("border_l");
// 调用 自动进入文本框
    input_focus.focus();
};}
// 点击X返回页面
var close1=document.querySelector(".close_p_2");
if(close1){
close1.onclick=function(){
    this.parentElement.classList.add("d-none");
    disappear.classList.remove("d-none");
    bottomAd.classList.add("d-none");
    click_btn.classList.remove("d-none");
    border.classList.add("border_l");
};
}
//自动进入文本框
var input_focus=document.querySelector(".input_pr");
if(input_focus)
// console.log(input_focus);
input_focus.focus();

// 登出 清除session缓存
function logout(){
    sessionStorage.clear();
    location.replace("http://127.0.0.1:3001");
  
};
// 获取session 改写用户名
var sname=sessionStorage.getItem("sname");
//  console.log(sname);
 var my_count=document.getElementById("my_count");
 if(sname){
     my_count.href="http://127.0.0.1:3001/user.html"
 };

// // 获取session 改写用户名
// // console.log(div);
// var p1=document.getElementById("user_status");
// var p2=document.getElementById("user_name");
// // console.log(p2);
// var sname=sessionStorage.getItem("sname");
// // console.log(sname);
// var my_count=document.getElementById("my_count");
// // console.log(my_count.href);
// //心情标语 数组
// var chars=["人生得意须尽欢 😊","今天的心情是茶 🍵呢?","咖啡带给你好心情 ❤️","咖啡会让你脑洞大开      哟 ☕",
// "微笑一下,每天都是 😀","春风十里不如你 💕","来杯咖啡换首心情 🎶"];

// //随机生成心情标语 
// var html=chars[Math.floor(Math.random()*chars.length)];
// if(sname){
//     p1.innerHTML=html;
//     p2.innerHTML=`<h4>&nbsp;&nbsp;&nbsp;&nbsp;⭐${sname}</h4>`;
//     my_count.href="http://127.0.0.1:3001/user.html"
// };

