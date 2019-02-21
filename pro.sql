SET NAMES UTF8;
DROP DATABASE IF EXISTS my_pro;
CREATE DATABASE my_pro CHARSET=UTF8;
USE my_pro;

/*图片样式*/
CREATE TABLE pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  connectPid INT,
  sm VARCHAR(128),
  md VARCHAR(128),
  lg VARCHAR(128)
);
/*用户信息表*/
CREATE TABLE star_users(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  sname VARCHAR(16),
  supwd VARCHAR(32),
  semail VARCHAR(32),
  sgender BOOLEAN,
  sphone CHAR(11)
);
/*菜单表咖啡*/
CREATE TABLE star_menu_coffee(
  coffeeId INT PRIMARY KEY AUTO_INCREMENT,
  coffeeName VARCHAR(16),
  coldorhot BOOLEAN,
  coffeePrice VARCHAR(3)
);
/*菜单表美食*/
CREATE TABLE star_menu_food(
  foodId INT PRIMARY KEY AUTO_INCREMENT,
  foodName VARCHAR(16),
  foodPrice VARCHAR(3)
);


-- /*登录表单*/
-- CREATE TABLE star_login(
--   sid INT PRIMARY KEY AUTO_INCREMENT,
--   sname VARCHAR(25),
--   spwd  VARCHAR(32)
-- );










/**************/
/**************/
/**插入数据**/
/***********/
/*插入图片信息*/
INSERT INTO pic VALUES
(NULL,NULL,"public/starbuck.jpg","public/starbuck.jpg","public/starbuck.jpg");
/*插入用户表信息*/
INSERT INTO star_users VALUES
(NULL,"Roman",md5("roman123"),"215486345@sina.com",1,15821044438),
(NULL,"Alice",md5("alice645"),"2355486345@163.com",0,13980044438),
(NULL,"张三",md5("zhangsan"),"21543256345@qq.com",1,158296569438),
(NULL,"李四",md5("lisisi"),"15486345@126.com",0,"021-21044438"),
(NULL,"Mark",md5("12132132"),"21545345@sina.com",1,1586444438),
(NULL,"小吴",md5("571571"),"571577557@qq.com",0,15800384178);
-- /*插入登录信息*/
-- INSERT INTO star_login VALUES
-- (NULL,'tom',md5('123')),
-- (NULL,'popo11',md5('5757112'));

/*插入菜单咖啡表*/
INSERT INTO star_menu_coffee VALUES
(NULL,"美式咖啡",0,25),
(NULL,"拿铁",0,25),
(NULL,"摩卡",0,30),
(NULL,"卡布基诺",0,25),
(NULL,"焦糖玛奇朵",0,25),
(NULL,"浓缩咖啡",0,30),
(NULL,"浓郁咖啡摩卡",0,25),
(NULL,"馥芮白",0,25),
(NULL,"榛果风味拿铁",0,30),
(NULL,"香草风味拿铁",0,25);
/*插入菜单美食表*/
INSERT INTO star_menu_food VALUES
(NULL,"美式松饼",35),
(NULL,"蓝莓麦芬",35),
(NULL,"香浓巧克力麦芬",35),
(NULL,"旋风玉桂酥",35),
(NULL,"法式香酥可颂",35),
(NULL,"法式焦糖酥",35),
(NULL,"层层榛子果仁酥",35),
(NULL,"蜂蜜提子司康",35),
(NULL,"燕麦焦糖布丁面包",35),
(NULL,"香浓巧克力可颂",35),
(NULL,"提子干松饼",35),
(NULL,"核桃提子软法面包",35),
(NULL,"红豆燕麦松饼",35),
(NULL,"全麦核桃麦芬",35);
