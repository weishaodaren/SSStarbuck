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
//点击星星记录切换页面
var btn_r=document.querySelector(".btn_r");
var btn_l=document.querySelector(".btn_l0");
var btn_l0=btn_l.parentNode.parentNode.parentNode.parentNode;
// console.log(btn_l0);
btn_r.onclick=function(){
    this.parentNode.parentNode.parentNode.parentNode.classList.add("d-none");
    btn_l0.classList.remove("d-none");
};
//点击返回初始页面
btn_l.onclick=function(){
    btn_r.parentNode.parentNode.parentNode.parentNode.classList.remove("d-none");
    btn_l0.classList.add("d-none");
};
/////////////////////////////////////////////////////////////