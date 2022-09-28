/*
SQLyog Enterprise v12.08 (64 bit)
MySQL - 5.6.48-log : Database - mydoctor
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mydoctor` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `mydoctor`;

/*Table structure for table `doctorstable` */

DROP TABLE IF EXISTS `doctorstable`;

CREATE TABLE `doctorstable` (
  `did` int(11) NOT NULL AUTO_INCREMENT COMMENT '医生ID',
  `dname` char(20) COLLATE utf8_bin NOT NULL COMMENT '医生姓名',
  `dsex` char(1) COLLATE utf8_bin NOT NULL DEFAULT '男' COMMENT '性别',
  `dsid` char(18) COLLATE utf8_bin NOT NULL COMMENT '身份证',
  `dtel` char(11) COLLATE utf8_bin NOT NULL COMMENT '电话',
  `dfeaturs` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '特长',
  `jid` int(11) NOT NULL COMMENT '职称ID，外键',
  `dphoto` char(50) COLLATE utf8_bin DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`did`),
  UNIQUE KEY `dsid` (`dsid`),
  UNIQUE KEY `dtel` (`dtel`),
  KEY `jid` (`jid`),
  CONSTRAINT `doctorstable_ibfk_1` FOREIGN KEY (`jid`) REFERENCES `jobs` (`jid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `doctorstable` */

insert  into `doctorstable`(`did`,`dname`,`dsex`,`dsid`,`dtel`,`dfeaturs`,`jid`,`dphoto`) values (2,'徐桃','男','23143','23423','疑难杂症，妇科',1,'panda-1658202025674.webp'),(3,'聂威龙','男','324235','11323','男科，不孕不育',7,'panda-1658194694672.webp'),(4,'尹航','女','423','34','阿尔法收到',2,'å¤§é±-1658194713136.webp'),(5,'胡杨','男','34234','2342','34234',3,'panda-1658194728583.webp'),(6,'韩雨扬','女','6545342','345345','我是艰苦户籍科',4,'panda-1658194755168.webp'),(7,'罗苇航','男','8765','6543','对方是否',5,'panda-1658194774727.webp'),(9,'朱镜臣','男','5345378678','345345678','5防护服',5,'panda-1658194806016.webp'),(10,'倪鑫','男','564563426756','1246433231','鬼画符鬼画符',7,'mn-1658194835727.webp'),(11,'黄雪银','女','89674634534','123123','发给对方',7,'panda-1658194854807.webp'),(12,'魏美','女','89657456356867','454735345','不放过还有',1,'panda-1658194872719.webp');

/*Table structure for table `jobs` */

DROP TABLE IF EXISTS `jobs`;

CREATE TABLE `jobs` (
  `jid` int(11) NOT NULL AUTO_INCREMENT COMMENT '职称ID',
  `jname` char(20) COLLATE utf8_bin NOT NULL COMMENT '职称名称',
  `jdes` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '职称描述',
  PRIMARY KEY (`jid`),
  UNIQUE KEY `jname` (`jname`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `jobs` */

insert  into `jobs`(`jid`,`jname`,`jdes`) values (1,'住院医生','住院医生，主要负责住医院的病人。'),(2,'主治医生','主治医生，10年工作经验。'),(3,'副主治医生','副主治医生，5-8年工作经验'),(4,'主任医生','主任医生，20年工作经验。'),(5,'副主任医生','副主任医生，15年工作经验。'),(6,'医士','医士，学校刚毕业，参加工作1年以内。'),(7,'医生','医生，参加工作1年以上，不足5年。');

/*Table structure for table `permissions` */

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `permissions` (
  `pid` int(11) NOT NULL AUTO_INCREMENT COMMENT '权限ID',
  `pname` char(20) COLLATE utf8_bin NOT NULL COMMENT '权限名称',
  `pdes` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '权限描述',
  `pstate` char(1) COLLATE utf8_bin NOT NULL DEFAULT '1' COMMENT '权限状态 默认1：启动，2：禁用。',
  PRIMARY KEY (`pid`),
  UNIQUE KEY `pname` (`pname`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `permissions` */

insert  into `permissions`(`pid`,`pname`,`pdes`,`pstate`) values (1,'权限管理','系统管理员可以操作此模块，添加、修改、删除用户，添加、修改、删除权限，添加、修改、删除角色。','1'),(4,'医生团队管理','医生团队的添加、修改、删除，可以添加、删除医生进团队','1'),(5,'医生管理','添加、修改、删除 医生信息','1'),(6,'签约管理','添加、修改、删除 居民信息，管理','1'),(7,'统计分析','查看团队的签约统计数据','1');

/*Table structure for table `resident_service_detail` */

DROP TABLE IF EXISTS `resident_service_detail`;

CREATE TABLE `resident_service_detail` (
  `rsdid` int(11) NOT NULL AUTO_INCREMENT COMMENT '居民签约详细的ID',
  `rid` int(11) NOT NULL COMMENT '居民ID，外键',
  `stid` int(11) NOT NULL COMMENT '服务类别ID，外键',
  `slid` int(11) NOT NULL COMMENT '服务级别ID，外键',
  PRIMARY KEY (`rsdid`),
  KEY `rid` (`rid`),
  KEY `stid` (`stid`),
  KEY `slid` (`slid`),
  CONSTRAINT `resident_service_detail_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `residents_table` (`rid`),
  CONSTRAINT `resident_service_detail_ibfk_2` FOREIGN KEY (`stid`) REFERENCES `service_type` (`stid`),
  CONSTRAINT `resident_service_detail_ibfk_3` FOREIGN KEY (`slid`) REFERENCES `service_level` (`slid`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `resident_service_detail` */

insert  into `resident_service_detail`(`rsdid`,`rid`,`stid`,`slid`) values (4,7,2,4),(5,7,3,4),(13,8,2,4),(14,8,5,4),(15,8,9,6),(16,9,2,4),(17,9,2,5),(18,9,3,6),(19,10,2,4),(20,11,2,6),(21,12,2,6),(22,12,5,6),(23,13,2,4),(24,14,2,6),(25,14,6,6),(26,15,2,5);

/*Table structure for table `resident_type_detail` */

DROP TABLE IF EXISTS `resident_type_detail`;

CREATE TABLE `resident_type_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '居民类别详细表自动ID',
  `rid` int(11) NOT NULL COMMENT '居民ID， 外键',
  `rtid` int(11) NOT NULL COMMENT '居民类别ID,外键',
  PRIMARY KEY (`id`),
  KEY `rid` (`rid`),
  KEY `rtid` (`rtid`),
  CONSTRAINT `resident_type_detail_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `residents_table` (`rid`),
  CONSTRAINT `resident_type_detail_ibfk_2` FOREIGN KEY (`rtid`) REFERENCES `residents_types` (`rtid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `resident_type_detail` */

insert  into `resident_type_detail`(`id`,`rid`,`rtid`) values (5,7,8),(6,7,1),(14,8,7),(15,8,1),(16,8,6),(17,9,1),(18,9,8),(19,10,8),(20,11,2),(21,11,8),(22,12,2),(23,12,5),(24,13,8),(25,14,8),(26,14,3),(27,15,8);

/*Table structure for table `residents_table` */

DROP TABLE IF EXISTS `residents_table`;

CREATE TABLE `residents_table` (
  `rid` int(11) NOT NULL AUTO_INCREMENT COMMENT '居民ID',
  `rname` char(20) COLLATE utf8_bin NOT NULL COMMENT '居民名字',
  `rsex` char(1) COLLATE utf8_bin NOT NULL DEFAULT '男' COMMENT '性别',
  `rsid` char(18) COLLATE utf8_bin NOT NULL COMMENT '身份证',
  `rtel` char(11) COLLATE utf8_bin NOT NULL COMMENT '手机号',
  `raddress` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '地址',
  `rphoto` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '照片',
  `rstate` char(1) COLLATE utf8_bin NOT NULL DEFAULT '2' COMMENT '签约状态：1，签约，2解约',
  `delstate` char(1) COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT '删除状态：0，未删除，1，已删除',
  PRIMARY KEY (`rid`),
  UNIQUE KEY `rsid` (`rsid`),
  UNIQUE KEY `rtel` (`rtel`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `residents_table` */

insert  into `residents_table`(`rid`,`rname`,`rsex`,`rsid`,`rtel`,`raddress`,`rphoto`,`rstate`,`delstate`) values (7,'大师傅士大夫','男','511021199910102220','13112345678','胜多负少','dayuh-1658718929880.webp','1','1'),(8,'李四','男','511021199910102221','13112345679','法国巴黎','panda-1658720956704.webp','1','0'),(9,'张三','女','511021201210102220','13112345677','法国波士顿','panda-1658830821338.webp','1','0'),(10,'噶有','男','511021199808102221','13112345674','重庆','panda-1658906266290.webp','1','0'),(11,'王刚','女','511021197010102220','13112341458','成都市北清路','panda-1660289537195.webp','1','0'),(12,'李伟','男','511021196904102220','13112147578','成都武侯区','panda-1660291018015.webp','1','0'),(13,'赵迪','男','511021199912102221','13159645678','成都高新区','panda-1660292138083.webp','1','0'),(14,'陈学春','女','511021199708102221','13112341425','龙泉','panda-1660533249901.webp','1','0'),(15,'王老五','女','511021198908101111','13112345658','金牛区','panda-1661218194361.webp','1','0');

/*Table structure for table `residents_types` */

DROP TABLE IF EXISTS `residents_types`;

CREATE TABLE `residents_types` (
  `rtid` int(11) NOT NULL AUTO_INCREMENT COMMENT '居民类型ID',
  `rtname` char(20) COLLATE utf8_bin NOT NULL COMMENT '居民类型名称',
  `rtdes` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '居民类型描述',
  PRIMARY KEY (`rtid`),
  UNIQUE KEY `rtname` (`rtname`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `residents_types` */

insert  into `residents_types`(`rtid`,`rtname`,`rtdes`) values (1,'0~6岁儿童','0~6岁儿童，主要时幼儿、儿童'),(2,'老年人','老年人，60岁以上人员'),(3,'孕产妇','孕妇，产妇'),(4,'高血压','高血压'),(5,'糖尿病','糖尿病'),(6,'严重精神障碍','严重精神障碍，郁郁症等'),(7,'残疾人','残疾人'),(8,'健康居民','健康居民'),(9,'孤独者','孤寡老人');

/*Table structure for table `rolepermissinstable` */

DROP TABLE IF EXISTS `rolepermissinstable`;

CREATE TABLE `rolepermissinstable` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色权限ID',
  `rid` int(11) NOT NULL COMMENT '角色ID',
  `pid` int(11) NOT NULL COMMENT '权限ID',
  PRIMARY KEY (`id`),
  KEY `rid` (`rid`),
  KEY `pid` (`pid`),
  CONSTRAINT `rolepermissinstable_ibfk_1` FOREIGN KEY (`rid`) REFERENCES `roles` (`rid`),
  CONSTRAINT `rolepermissinstable_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `permissions` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `rolepermissinstable` */

insert  into `rolepermissinstable`(`id`,`rid`,`pid`) values (1,1,1),(3,3,4),(7,3,6),(9,4,6),(12,5,6),(13,5,7),(14,2,4),(15,2,5),(16,2,7);

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `rid` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `rname` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '角色名称',
  `rdes` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '角色描述',
  `rstate` char(1) COLLATE utf8_bin NOT NULL DEFAULT '1' COMMENT '角色状态，默认1，启动，2，禁用。',
  PRIMARY KEY (`rid`),
  UNIQUE KEY `rname` (`rname`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `roles` */

insert  into `roles`(`rid`,`rname`,`rdes`,`rstate`) values (1,'管理员','系统管理员','1'),(2,'院长','院长','1'),(3,'医生','医生','1'),(4,'护士','护士','1'),(5,'普通员工','普通工作人员','1');

/*Table structure for table `service_detail_talbe` */

DROP TABLE IF EXISTS `service_detail_talbe`;

CREATE TABLE `service_detail_talbe` (
  `sdid` int(11) NOT NULL AUTO_INCREMENT COMMENT '服务包详细表的ID',
  `stid` int(11) NOT NULL COMMENT '服务包类型ID，外键',
  `slid` int(11) NOT NULL COMMENT '服务包级别ID，外键',
  `price` float NOT NULL COMMENT '价格',
  PRIMARY KEY (`sdid`),
  KEY `stid` (`stid`),
  KEY `slid` (`slid`),
  CONSTRAINT `service_detail_talbe_ibfk_1` FOREIGN KEY (`stid`) REFERENCES `service_type` (`stid`),
  CONSTRAINT `service_detail_talbe_ibfk_2` FOREIGN KEY (`slid`) REFERENCES `service_level` (`slid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `service_detail_talbe` */

insert  into `service_detail_talbe`(`sdid`,`stid`,`slid`,`price`) values (1,2,4,0),(2,2,5,0),(3,2,6,0),(4,3,4,0),(5,3,5,0),(6,3,6,50),(7,4,4,0);

/*Table structure for table `service_level` */

DROP TABLE IF EXISTS `service_level`;

CREATE TABLE `service_level` (
  `slid` int(11) NOT NULL AUTO_INCREMENT COMMENT '服务包级别ID',
  `slname` char(20) COLLATE utf8_bin NOT NULL COMMENT '服务包级别名称',
  `sldes` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '服务包级别描述',
  PRIMARY KEY (`slid`),
  UNIQUE KEY `slname` (`slname`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `service_level` */

insert  into `service_level`(`slid`,`slname`,`sldes`) values (4,'初级包','提供一个服务包种类的基本服务功能'),(5,'中级包','提供一个服务包种类的增强服务功能'),(6,'高级包','提供一个服务包种类的全面服务功能');

/*Table structure for table `service_type` */

DROP TABLE IF EXISTS `service_type`;

CREATE TABLE `service_type` (
  `stid` int(11) NOT NULL AUTO_INCREMENT COMMENT '服务包类别ID',
  `stname` char(20) COLLATE utf8_bin NOT NULL,
  `stdes` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`stid`),
  UNIQUE KEY `stname` (`stname`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `service_type` */

insert  into `service_type`(`stid`,`stname`,`stdes`) values (2,'公共卫生基础服务','全民公共卫生免费服务包'),(3,'0~6岁儿童保健','包括儿童保健免费服务，儿童预苗服务等。'),(4,'高血压','包括免费血压检查，降血压跟踪服务等。'),(5,'糖尿病','定期上门服务，血糖检查等服务。'),(6,'孕产妇','孕前咨询，保健、育儿服务等'),(7,'肺结核','国家传染病免费服务包'),(8,'严重精神障碍','心理输导，心理咨询，治疗服务。'),(9,'残疾人','社区关爱服务等');

/*Table structure for table `team_resident_detail` */

DROP TABLE IF EXISTS `team_resident_detail`;

CREATE TABLE `team_resident_detail` (
  `trdid` int(11) NOT NULL AUTO_INCREMENT COMMENT '团队居民签约详细id',
  `tid` int(11) NOT NULL COMMENT '医生团队ID',
  `rid` int(11) NOT NULL COMMENT '居民ID',
  `did` int(11) NOT NULL COMMENT '医生ID',
  `date` date NOT NULL COMMENT '签约时间',
  PRIMARY KEY (`trdid`),
  KEY `tid` (`tid`),
  KEY `rid` (`rid`),
  KEY `did` (`did`),
  CONSTRAINT `team_resident_detail_ibfk_1` FOREIGN KEY (`tid`) REFERENCES `teams` (`tid`),
  CONSTRAINT `team_resident_detail_ibfk_2` FOREIGN KEY (`rid`) REFERENCES `residents_table` (`rid`),
  CONSTRAINT `team_resident_detail_ibfk_3` FOREIGN KEY (`did`) REFERENCES `doctorstable` (`did`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `team_resident_detail` */

insert  into `team_resident_detail`(`trdid`,`tid`,`rid`,`did`,`date`) values (1,4,7,12,'2021-10-01'),(4,4,8,4,'2022-06-09'),(5,5,9,2,'2022-07-26'),(6,8,10,4,'2022-07-27'),(7,5,11,5,'2022-08-12'),(8,4,12,4,'2022-08-12'),(9,4,13,9,'2022-08-12'),(10,8,14,6,'2022-08-15'),(11,4,15,7,'2022-08-23');

/*Table structure for table `teamdoctortable` */

DROP TABLE IF EXISTS `teamdoctortable`;

CREATE TABLE `teamdoctortable` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `tid` int(11) NOT NULL COMMENT '团队ID,外键',
  `did` int(11) NOT NULL COMMENT '医生id,外键',
  `manager` char(1) COLLATE utf8_bin NOT NULL DEFAULT '2' COMMENT '负责人，1：是，2:不是',
  PRIMARY KEY (`id`),
  KEY `tid` (`tid`),
  KEY `did` (`did`),
  CONSTRAINT `teamdoctortable_ibfk_1` FOREIGN KEY (`tid`) REFERENCES `teams` (`tid`),
  CONSTRAINT `teamdoctortable_ibfk_2` FOREIGN KEY (`did`) REFERENCES `doctorstable` (`did`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `teamdoctortable` */

insert  into `teamdoctortable`(`id`,`tid`,`did`,`manager`) values (10,4,4,'1'),(11,4,9,'2'),(12,5,5,'1'),(13,8,2,'1'),(14,8,12,'2');

/*Table structure for table `teams` */

DROP TABLE IF EXISTS `teams`;

CREATE TABLE `teams` (
  `tid` int(11) NOT NULL AUTO_INCREMENT COMMENT '团队ID',
  `tname` char(20) COLLATE utf8_bin NOT NULL COMMENT '团队名字',
  `tdes` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '团队描述',
  `tphoto` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '团队标志',
  `tdeleteState` char(1) COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT '团队删除状态，默认0，未删除，1，已删除。',
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `teams` */

insert  into `teams`(`tid`,`tname`,`tdes`,`tphoto`,`tdeleteState`) values (3,'456','234','dayuh-1658221066233.webp','1'),(4,'一汽大众关爱团队','卓越，杰出的团队。我们最棒啦。','dayuh-1660531752730.webp','0'),(5,'吉利关爱团队','永远争第一','panda-1660534095604.webp','0'),(6,'天字三号','专业妇科','dayuh-1658379890490.webp','1'),(7,'007','008','mn-1658417215117.webp','1'),(8,'光明光电关爱团队','光明光电，温暖你我。','panda-1660531832291.webp','0');

/*Table structure for table `userroletable` */

DROP TABLE IF EXISTS `userroletable`;

CREATE TABLE `userroletable` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户角色表id',
  `uid` int(11) NOT NULL COMMENT '用户ID,外键',
  `rid` int(11) NOT NULL COMMENT '角色ID，外键',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `rid` (`rid`),
  CONSTRAINT `userroletable_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`),
  CONSTRAINT `userroletable_ibfk_2` FOREIGN KEY (`rid`) REFERENCES `roles` (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `userroletable` */

insert  into `userroletable`(`id`,`uid`,`rid`) values (17,1,1),(18,3,1);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `uaccess` char(20) COLLATE utf8_bin NOT NULL COMMENT '用户登录帐号',
  `uname` char(20) COLLATE utf8_bin NOT NULL COMMENT '用户姓名',
  `upassword` char(8) COLLATE utf8_bin NOT NULL COMMENT '用户密码',
  `usex` char(1) COLLATE utf8_bin NOT NULL DEFAULT '男' COMMENT '性别',
  `usid` char(18) COLLATE utf8_bin NOT NULL COMMENT '身份证',
  `utel` char(11) COLLATE utf8_bin NOT NULL COMMENT '手机号码',
  `uphoto` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '头像',
  `ustate` char(1) COLLATE utf8_bin NOT NULL DEFAULT '1' COMMENT '帐号状态，默认1，启动，2，禁用。',
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uaccess` (`uaccess`),
  UNIQUE KEY `usid` (`usid`),
  UNIQUE KEY `utel` (`utel`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `users` */

insert  into `users`(`uid`,`uaccess`,`uname`,`upassword`,`usex`,`usid`,`utel`,`uphoto`,`ustate`) values (1,'admin','系统管理员123','123456','男','123456789123455555','13345672222','panda-1661309831829.webp','1'),(3,'wenqingwu','老蚊子','123456','男','512012198808081234','13258231798','mn-1657863715990.webp','1'),(4,'laowenzi','老蚊子','123456','男','512012198808081235','13258231799','mn-1657865218302.webp','1'),(5,'111qq','qqq','1123123','女','512012198808081233','13258231790','mn-1657951282649.webp','1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
