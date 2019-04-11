

CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL COMMENT '文章标签',
  `title` varchar(255) DEFAULT NULL COMMENT '文章标题',
  `author` varchar(255) DEFAULT NULL COMMENT '作者',
  `time` time DEFAULT NULL COMMENT '上传时间',
  `state` varchar(255) DEFAULT NULL COMMENT '发布状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文章';





CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `observer` varchar(255) DEFAULT NULL COMMENT '评论者',
  `content` text COMMENT '评论内容',
  `datetime` time DEFAULT NULL COMMENT '评论时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论管理';



CREATE TABLE `set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `designation` varchar(255) DEFAULT '' COMMENT '网站名称',
  `domain` varchar(255) DEFAULT NULL COMMENT '网站域名',
  `cache` varchar(255) DEFAULT NULL COMMENT '缓存时间',
  `uploading` varchar(255) DEFAULT '' COMMENT '最大文件上传',
  `file` varchar(255) DEFAULT NULL COMMENT '上传文件类型',
  `headline` varchar(255) DEFAULT NULL COMMENT '首页标题',
  `antistop` varchar(255) DEFAULT NULL COMMENT 'META关键词',
  `describe` varchar(255) DEFAULT NULL COMMENT 'META描述',
  `copyright` varchar(255) DEFAULT NULL COMMENT '版权信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='网站信息';



CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '登录名',
  `phone` varchar(11) NOT NULL DEFAULT '' COMMENT '手机',
  `email` varchar(255) DEFAULT '' COMMENT '邮箱',
  `ip` varchar(255) DEFAULT NULL COMMENT 'ip',`role` varchar(255) DEFAULT '' COMMENT '角色',
  `audit` varchar(255) DEFAULT '' COMMENT '审核',
  `picture` varchar(255) DEFAULT NULL COMMENT '照片',
  `sex` varchar(1) NOT NULL DEFAULT '' COMMENT '性别',
  `jurisdiction` varchar(1) DEFAULT NULL COMMENT '权限',
  `pwd` varchar(255) DEFAULT '123456' COMMENT '默认密码',
  `date` date DEFAULT NULL COMMENT '时间',
  `remark` text COMMENT '备注',
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;



INSERT INTO `user` VALUES (1,'sdfa','18341122365','vc@qq.com','','','','','0','1','123456',NULL,NULL,NULL),(2,'易湛','18315455684','as@163.com','','','','','1','1','123456',NULL,NULL,NULL),(3,'易长风','18341122365','as@163.com','','','','','1','1','123456',NULL,NULL,NULL),(4,'admin','18341122365','acc@qq.com','','','','','1','1','123456','2019-03-08',NULL,NULL);
