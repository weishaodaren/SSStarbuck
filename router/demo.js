const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
router.post("/demo_a",(req,res)=>{
   
        var obj=req.body;
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
          res.send({code:403,msg:'phone required'});
          return;
        }
       pool.query("INSERT INTO star_register SET ?",[obj],(err,result)=>{
           if(err) throw err;
           if(result.affectedRows>0){
               res.send({code:200,msg:"register success"});
           }
       });
    });

module.exports=router;