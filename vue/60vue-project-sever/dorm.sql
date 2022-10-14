/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.29-log : Database - dorm
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dorm` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `dorm`;

/*Table structure for table `dormlist` */

DROP TABLE IF EXISTS `dormlist`;

CREATE TABLE `dormlist` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `dormId` int(40) NOT NULL COMMENT '宿舍编号',
  `dormName` varchar(40) NOT NULL COMMENT '宿舍名称',
  `balance` decimal(40,0) DEFAULT NULL COMMENT '宿舍余额',
  `type` int(10) DEFAULT '1' COMMENT '寝室状态，1为正常，2位催费',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

/*Data for the table `dormlist` */

insert  into `dormlist`(`id`,`dormId`,`dormName`,`balance`,`type`) values (2,1002,'2号寝室啊','5',1),(4,1004,'4号寝室','0',1),(5,1005,'5号寝室','0',2),(6,1006,'6号寝室','0',1),(51,1007,'7号寝室','0',1),(59,1001,'1号寝室啊','0',1),(61,1008,'8号寝室','0',1);

/*Table structure for table `notice` */

DROP TABLE IF EXISTS `notice`;

CREATE TABLE `notice` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '公告id',
  `title` varchar(100) DEFAULT NULL COMMENT '公告标题',
  `time` timestamp NULL DEFAULT NULL COMMENT '发布时间',
  `userId` int(20) DEFAULT NULL COMMENT '发布人id',
  `content` varchar(200) DEFAULT NULL COMMENT '公告内容',
  UNIQUE KEY `id` (`id`),
  KEY `FK_notice` (`userId`),
  CONSTRAINT `FK_notice` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `notice` */

insert  into `notice`(`id`,`title`,`time`,`userId`,`content`) values (1,'公告1修','2020-09-01 00:00:00',1,'公告1修'),(2,'公告2','2020-09-02 00:00:00',1,'公告1112222'),(3,'公告3','2020-09-03 00:00:00',3,'公告13333'),(4,'公告4','2020-09-04 00:00:00',4,'公告1144111'),(5,'公告5','2020-09-05 00:00:00',4,'公告115511'),(9,'公告5','2021-05-10 10:38:22',2,'公告5公告5公告5');

/*Table structure for table `payment` */

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
  `id` int(40) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `money` varchar(40) DEFAULT NULL COMMENT '缴费金额',
  `stuId` int(40) DEFAULT NULL COMMENT '缴费学生id',
  `time` timestamp NULL DEFAULT NULL COMMENT '缴费时间',
  PRIMARY KEY (`id`),
  KEY `FK_payment` (`stuId`),
  CONSTRAINT `FK_payment` FOREIGN KEY (`stuId`) REFERENCES `student` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

/*Data for the table `payment` */

insert  into `payment`(`id`,`money`,`stuId`,`time`) values (40,'5',19,'2021-05-10 15:03:22');

/*Table structure for table `student` */

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `stuId` int(40) DEFAULT NULL COMMENT '学号',
  `stuName` varchar(40) DEFAULT NULL COMMENT '姓名',
  `stuUserId` int(20) DEFAULT NULL COMMENT '账号',
  `stuDormId` int(20) DEFAULT NULL COMMENT '所属宿舍编号',
  `stuPas` int(20) DEFAULT NULL COMMENT '密码',
  UNIQUE KEY `id` (`id`),
  KEY `FK_student` (`stuDormId`),
  CONSTRAINT `FK_student` FOREIGN KEY (`stuDormId`) REFERENCES `dormlist` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

/*Data for the table `student` */

insert  into `student`(`id`,`stuId`,`stuName`,`stuUserId`,`stuDormId`,`stuPas`) values (19,101,'学生1啊',101,2,101),(20,102,'学生2修改',102,6,102),(21,103,'学生3啊',103,4,103),(22,104,'学生4',104,6,104),(23,105,'学生5',105,6,105),(28,106,'学生6',106,51,106);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `userId` int(50) DEFAULT NULL,
  `password` int(20) DEFAULT NULL,
  `type` int(10) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`userId`,`password`,`type`) values (1,'1号管理员',201,201,2),(2,'2号管理员',202,202,1),(3,'3号管理员',203,203,1),(4,'4号管理员',204,204,1),(5,'5号管理员',205,205,1),(10,'7号管理员',207,207,2),(12,'6号管理员',206,206,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
