const pool=require("../pool.js");
const express=require("express");
//创建路由器
var router=express.Router();
router.post("/register",(req,res)=>{
    var obj=req.body;
    //console.log(obj);
    var $sname=obj.sname;
    if(!$sname){
        res.send({code:401,msg:"sname required"});
        return;
    }
    var $supwd=obj.supwd;
    if(!$supwd){
        res.send({code:402,msg:"supwd required"});
        return;
    }
    var $semail=obj.semail;
    if(!$semail){
        res.send({code:402,msg:"semail required"});
        return;
    }
    var $sphone=obj.sphone;
    if(!$sphone){
      res.send({code:403,msg:"phone required"});
      return;
    }
   pool.query("INSERT INTO star_register SET ?",[obj],(err,result)=>{
       if(err) throw err;
       if(result.affectedRows>0){
           console.log(55);
           res.send({code:200,msg:"register success"});
       }
   });
});

//创建用户登录路由
router.get('/login',(req,res)=>{
    var sname=req.query.sname;
    var spwd=req.query.spwd;
    var sql='SELECT sid FROM star_login WHERE suname= ? AND supwd= md5(?)';
    pool.query(sql,[sname,spwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:0,msg:`用户名或密码有误`});
        }else{
            res.send({code:1,msg:`登录成功`});
        }
    });
});

//导出路由
module.exports=router;
