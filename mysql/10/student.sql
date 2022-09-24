/*
 Navicat Premium Data Transfer

 Source Server         : w310
 Source Server Type    : MySQL
 Source Server Version : 50739
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50739
 File Encoding         : 65001

 Date: 23/09/2022 12:36:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age` int(11) NOT NULL,
  `gender` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '女',
  `income` float NULL DEFAULT NULL,
  `class_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `class_id`(`class_id`) USING BTREE,
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (1, '张三', 32, '男', 4000, 1);
INSERT INTO `student` VALUES (2, '李四', 30, '男', 8000, 1);
INSERT INTO `student` VALUES (3, '赵武', 22, '男', 9000, 2);
INSERT INTO `student` VALUES (4, '卿世煌', 55, '男', 2000, 3);
INSERT INTO `student` VALUES (5, '张国范', 40, '男', 3000, 2);
INSERT INTO `student` VALUES (6, '李世民', 26, '男', 5000, 3);
INSERT INTO `student` VALUES (7, '王德发', 18, '男', 5000, 2);
INSERT INTO `student` VALUES (8, '武则天', 30, '女', 2000, 1);
INSERT INTO `student` VALUES (9, '花木兰', 200, '女', 1000, 1);
INSERT INTO `student` VALUES (10, '张飞', 30, '男', NULL, 2);
INSERT INTO `student` VALUES (12, '刘关张', 30, '女', 5000, 2);
INSERT INTO `student` VALUES (13, '张古浩二', 30, '女', 6000, 1);
INSERT INTO `student` VALUES (14, '张正义', 30, '女', 4000, 2);
INSERT INTO `student` VALUES (15, '李张恒', 30, '女', 5000, 2);

SET FOREIGN_KEY_CHECKS = 1;
