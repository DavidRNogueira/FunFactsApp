SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `username` varchar(45) UNIQUE,
  `avatar` varchar(500) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(55) DEFAULT NULL,
  `email` varchar(55) DEFAULT NULL,
  `date_joined` varchar(45) DEFAULT NULL,

PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` varchar(500) DEFAULT NULL,
  `likes` int (55) DEFAULT NULL,
`user_fk` varchar(45) DEFAULT NULL,


PRIMARY KEY (`id`),
FOREIGN KEY (`user_fk`)
REFERENCES `user` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` varchar(500) DEFAULT NULL,
  `avatar` varchar(55) DEFAULT NULL,
  `first_name` varchar(55) DEFAULT NULL,
  `last_name` varchar(55) DEFAULT NULL,
  `post_fk` INT NOT NULL,

PRIMARY KEY (`id`),
FOREIGN KEY (`post_fk`)
REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `fact`;

CREATE TABLE `fact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` varchar(500) DEFAULT NULL,
  `category` varchar(55) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `shares` int(40) DEFAULT NULL,
`date_suggested` varchar(55) DEFAULT NULL,
`approved` TINYINT(1) DEFAULT 0,

PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `article_reference`;

CREATE TABLE `article_reference` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `article_link` varchar(500) DEFAULT NULL,
  `fact_fk` INT NOT NULL,

PRIMARY KEY (`id`),
FOREIGN KEY (`fact_fk`)
REFERENCES `fact` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `bug`;

CREATE TABLE `bug` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `reporter_username` varchar(500) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `date_reported` varchar(55) DEFAULT NULL,

PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
