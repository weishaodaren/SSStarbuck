const express=require("express");
const bodyParser=require("body-parser");
const userRouter=require("./router/user");
const productsRouter=require("./router/products");


//创建web服务器
var server=express();
server.listen(3001);
//托管静态资源
server.use(express.static("public"));

//bodyparser中间件
server.use(bodyParser.urlencoded({
    extended:false
}));
// /user/register
server.use("/user",userRouter);
//把商品路由器挂载到/product
// /product/test
server.use("/products",productsRouter);
