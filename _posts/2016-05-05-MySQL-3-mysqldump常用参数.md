---
layout: post
title: mysqldump 常用参数
tags: 
    - MySQL
categories: 
    - 数据库
    - MySQL
date: 2016-05-05 04:30:11
---

常用的 mysqldump 命令组合。

## 备份数据库

```bash
mysqldump db_name > bak_name.sql
mysqldump -A -u [dbuser] -p db_name > bak_name.sql
mysqldump -d -A --add-drop-table -uroot -p >xxx.sql
```

## 备份所有库到一个单独的文件

```bash
mysql -e 'show databases' | sed -n '2,$p' | xargs -I DB 'mysqldump DB > DB.sql'
```

### 1. 导出结构不导出数据

```bash
mysqldump　--opt　-d　db_name　-u　root　-p　>　xxx.sql
```

### 2. 导出数据不导出结构

```bash
mysqldump　-t　db_name　-uroot　-p　>　xxx.sql
```

### 3. 导出数据和表结构

```bash
mysqldump　db_name　-uroot　-p　>　xxx.sql
```

### 4. 导出特定表的结构

```bash
mysqldump　-uroot　-p　-B　db_name　--table　tb_name　>　xxx.sql
```

## 导入数据

 因为 mysqldump 导出的是完整的 SQL 语句，所以用 mysql 客户程序很容易就能把数据导入了：

```bash
mysql -u db_user -p db_name  < xxx.sql
mysql> source /path/xxx.sql
```

## mysqldump 参数详解

`–all-databases , -A`
导出全部数据库
mysqldump -uroot -p –all-databases

`–all-tablespaces , -Y`
导出全部表空间
mysqldump -uroot -p –all-databases –all-tablespaces

`–no-tablespaces , -y`
不导出任何表空间信息
mysqldump -uroot -p –all-databases –no-tablespaces

`–add-drop-database`
每个数据库创建之前添加 drop 数据库语句
mysqldump -uroot -p –all-databases –add-drop-database

`–add-drop-table`
每个数据表创建之前添加 drop 数据表语句。(默认为打开状态，使用–skip-add-drop-table 取消选项)
mysqldump -uroot -p –all-databases (默认添加 drop 语句)
mysqldump -uroot -p –all-databases –skip-add-drop-table (取消 drop 语句)

`–add-locks`
在每个表导出之前增加 LOCK TABLES 并且之后 UNLOCK TABLE。(默认为打开状态，使用–skip-add-locks 取消选项)
mysqldump -uroot -p –all-databases(默认添加 LOCK 语句)
mysqldump -uroot -p –all-databases –skip-add-locks (取消 LOCK 语句)

`–comments`
附加注释信息。
默认为打开，可以用–skip-comments 取消 mysqldump -uroot -p –all-databases (默认记录注释)mysqldump -uroot -p –all-databases "code"
skip-comments (取消注释)

`–compact`
导出更少的输出信息 (用于调试),去掉注释和头尾等结构，可以使用选项：–skip-add-drop-table –skip-add-locks –skip-comments –skip-disable-keys
mysqldump -uroot -p –all-databases –compact

`–complete-insert, -c`
使用完整的 insert 语句 (包含列名称)。这么做能提高插入效率，但是可能会受到 max_allowed_packet 参数的影响而导致插入失败。
mysqldump -uroot -p –all-databases –complete-insert

`–compress, -C`
在客户端和服务器之间启用压缩传递所有信息
mysqldump -uroot -p –all-databases –compress

`–databases, -B`
导出几个数据库。参数后面所有名字参量都被看作数据库名。
mysqldump -uroot -p –databases test mysql

`–debug`
输出 debug 信息，用于调试。
默认值为：d:t:o,/tmp/mysqldump.trace
mysqldump -uroot -p –all-databases –debug
mysqldump -uroot -p –all-databases –debug="d:t:o,/tmp/debug.trace"

`–debug-info`
输出调试信息并退出
mysqldump -uroot -p –all-databases –debug-info

`–default-character-set`
设置默认字符集，默认值为 utf8
mysqldump -uroot -p –all-databases –default-character-set=latin1

`–delayed-insert`
采用延时插入方式（INSERT DELAYED）导出数据
mysqldump -uroot -p –all-databases –delayed-insert

`–events, -E`
导出事件
mysqldump -uroot -p –all-databases –events

`–flush-logs`
开始导出之前刷新日志
请注意：假如一次导出多个数据库 (使用选项–databases 或者–all-databases)，将会逐个数据库刷新日志。除使用–lock-all-tables 或者–master-data 外。在这种情况下，日志将会被刷新一次，相应的所以表同时被锁定。因此，如果打算同时导出和刷新日志应该使用–lock-all-tables 或者–master-data 和–flush-logs.
mysqldump -uroot -p –all-databases –flush-logs

`–flush-privileges`
在导出 mysql 数据库之后，发出一条 FLUSH PRIVILEGES 语句。为了正确恢复，该选项应该用于导出 mysql 数据库和依赖 mysql 数据库数据的任何时候。
mysqldump -uroot -p –all-databases –flush-privileges

`–force`
在导出过程中忽略出现的 SQL 错误
mysqldump -uroot -p –all-databases –force

`–host, -h`
需要导出的主机信息
mysqldump -uroot -p –host=localhost –all-databases

`–ignore-table`

不导出指定表。
指定忽略多个表时，需要重复多次，每次一个表。每个表必须同时指定数据库和表名。
例如：–ignore-table=database.table1 –ignore-table=database.table2 ……
mysqldump -uroot -p –host=localhost –all-databases –ignore-table=mysql.user

`–lock-all-tables, -x`
提交请求锁定所有数据库中的所有表，以保证数据的一致性。
这是一个全局读锁，并且自动关闭–single-transaction 和–lock-tables 选项。
mysqldump -uroot -p –host=localhost –all-databases –lock-all-tables

`–lock-tables, -l`
开始导出前，锁定所有表。
用 READ LOCAL 锁定表以允许 MyISAM 表并行插入。对于支持事务的表例如 InnoDB 和 BDB，–single-transaction 是一个更好的选择，因为它根本不需要锁定表。
请注意当导出多个数据库时，–lock-tables 分别为每个数据库锁定表。因此，该选项不能保证导出文件中的表在数据库之间的逻辑一致性。不同数据库表的导出状态可以完全不同。
mysqldump -uroot -p –host=localhost –all-databases –lock-tables

`–no-create-db, -n`
只导出数据，而不添加 CREATE DATABASE 语句。
mysqldump -uroot -p –host=localhost –all-databases –no-create-db

`–no-create-info,-t`
只导出数据，而不添加 CREATE TABLE 语句
mysqldump -uroot -p –host=localhost –all-databases –no-create-info

` –no-data, -d `
不导出任何数据，只导出数据库表结构
mysqldump -uroot -p –host=localhost –all-databases –no-data

` –password, -p `
连接数据库密码

` –port, -P `
连接数据库端口号

` –user, -u `
指定连接的用户名。
