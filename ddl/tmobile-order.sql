/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`commercedb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `commercedb`;

/*Table structure for table `order` */

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` varchar(64) NOT NULL,
  `lastname` varchar(24) NOT NULL,
  `firstname` varchar(24) NOT NULL,
  `email` varchar(24) NOT NULL,
  `phone` varchar(18) NOT NULL,
  `currentcarrier` varchar(18) DEFAULT NULL,
  `creditscorerangetype` varchar(30) NOT NULL,
  `shiptype` varchar(64) DEFAULT NULL,
  `shipaddress1` varchar(64) DEFAULT NULL,
  `shipaddress2` varchar(64) DEFAULT NULL,
  `shipcity` varchar(64) DEFAULT NULL,
  `shipstate` varchar(64) DEFAULT NULL,
  `shipzip` varchar(64) DEFAULT NULL,
  `billaddress1` varchar(128) DEFAULT NULL,
  `billaddress2` varchar(64) DEFAULT NULL,
  `billcity` varchar(64) DEFAULT NULL,
  `billstate` varchar(64) DEFAULT NULL,
  `billzip` varchar(64) DEFAULT NULL,
  `customername` varchar(64) DEFAULT NULL,
  `cardno` varchar(64) DEFAULT NULL,
  `expirydate` varchar(64) DEFAULT NULL,
  `cvv` varchar(64) DEFAULT NULL,
  `store` varchar(24) NOT NULL,
  `createdAt` varchar(64) DEFAULT NULL,
  `updatedAt` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `order` */

/*Table structure for table `order_details` */

DROP TABLE IF EXISTS `order_details`;

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `tax` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_id_fk` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `order_details` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
