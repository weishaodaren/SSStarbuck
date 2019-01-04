const pool=require("../pool.js");
const express=require("express");
//创建路由器
var router=express.Router();
router.post("/register",(req,res)=>{
    var obj=req.body;
    var $sname=obj.sname;
    if(!$sname){
        res.send({code:401,msg:"sname required"});
        return;
    }
    var $upwd=obj.upwd;
    if(!$upwd){
        res.send({code:402,msg:"supwd required"});
    }
});
//导出路由
module.exports=router;