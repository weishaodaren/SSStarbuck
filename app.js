const express=require('express');
//创建服务器
var server=express();
server.listen(8080);
server.use(express.static('public'));