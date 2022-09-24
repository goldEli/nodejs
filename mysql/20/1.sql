-- 商品类别 --
CREATE TABLE category(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);
-- 商品 --
CREATE TABLE goods(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    -- 成本价 --
    price DOUBLE(11, 2) NOT NULL,
    -- 销售价 --
    sales_price DOUBLE(11, 2) NOT NULL,
    -- 库存 --
    stock INT,
    -- 商品类型 --
    category_id INT,
    FOREIGN KEY(category_id) REFERENCES category(id)
);
INSERT INTO category
VALUES(2, "日用品"),
    (3, "数码产品"),
    (1, "汽车");
INSERT INTO goods
VALUES (null, "高露洁牙膏", 5, 20, 2000, 1),
    (null, "iphone14", 2000, 9000, 100, 2),
    (null, "太太乐鸡精", 2.5, 6, 200, 1),
    (null, "康师傅老谭酸菜面", 2, 5, 100, 1),
    (null, "本田雅阁", 80000, 180000, 100, 3),
    (null, "华为mate20", 1000, 2555, 100, 2),
    (null, "飘柔洗发水", 2, 25, 50, 1),
    (null, "哈弗h6", 60000, 100000, 100, 3),
    (null, "小米10", 1500, 5000, 100, 2),
    (null, "丰田凯美瑞", 50000, 150000, 100, 3),
    (null, "纯棉毛巾", 1, 50, 600, 1),
    (null, "日产轩逸", 40000, 90000, 100, 3),
    (null, "佳洁士香皂", 2, 9, 500, 1);
-- 统计有多少种商品 --
SELECT COUNT(*)
FROM goods;
SELECT COUNT(*) AS "总共多少种商品"
FROM goods;
-- 库存总有有多少 --
SELECT SUM(stock)
FROM goods;
-- 平均成本 --
SELECT AVG(price)
FROM goods;
-- 售价（单价最高）--
SELECT MAX(sales_price)
FROM goods;
-- 售价（单价最低）--
SELECT MIN(sales_price)
FROM goods;
-- 分组统计 --
-- 每个类别的数量 --
SELECT category_id,
    COUNT(*)
FROM goods
GROUP BY category_id;
-- 聚合筛选：对已经选择出的商品再次筛选 --
-- 每个类别的数量，然后找出大于3的 --
SELECT category_id,
    COUNT(*)
FROM goods
GROUP BY category_id
HAVING(COUNT(*) > 3);
--子查询 查询条件中加查询条件--
--查询所有商品的名称 类型id 商品类型的名称--
SELECT name AS 商品名称,
    category_id AS 商品id,
    (
        SELECT name
        from category
        WHERE 商品id = id
    ) as 商品类型
FROM goods;
-- 查询价格大于10 且类型为日用品的商品--
-- SELECT sales_price
-- FROM goods
-- WHERE id = 7;
SELECT *
from goods
WHERE sales_price > ALL(
        SELECT sales_price
        FROM goods
        WHERE id = 7
    );
-- 表连接
-- 商品和商品两张表连接起来
-- 当然子查询可以做到 但是性能低 要查两次
-- 内连接
SELECT *
FROM goods
    JOIN category ON goods.category_id = category.id;
-- 外连接 
-- 左
SELECT *
FROM goods
    LEFT JOIN category ON goods.category_id = category.id;
-- 右
SELECT *
FROM goods
    RIGHT JOIN category ON goods.category_id = category.id;

/* 
作业
下列表：
id   
 */
