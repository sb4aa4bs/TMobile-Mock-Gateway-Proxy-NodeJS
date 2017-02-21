SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
--  MAKE SURE YOU ARE INSIDE A INSTANCE/SCHEMA FIRST
--

--
-- Table structure for table `product`
--
USE demodb;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `epid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `retail_price` double NOT NULL,
  `sale_price` double NOT NULL,
  `promotion` tinyint(1) NOT NULL,
  `size` varchar(255) NOT NULL,
  `configuration` text NOT NULL,
  `color` varchar(255) NOT NULL,
  `skuid` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `contract` text NOT NULL,
  `store` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `epid` (`epid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `product`
--
INSERT INTO `product` (`id`, `epid`, `name`, `description`, `retail_price`, `sale_price`, `promotion`, `size`, `configuration`, `color`, `skuid`, `picture`, `active`, `contract`, `store`) VALUES
(1, 'qgqvhirugu=', 'Samsung Galaxy On Nxt', 'Flaunt your style with the Samsung Galaxy On Nxt. Featuring a drool-worthy body and impressive features, this smartphone is built to perform. Talk to your mom, chat with your friends, browse the Internet - stay connected the way that suits you best - this smartphone is powerful enough to keep up with your busy lifestyle.', 369, 340, 1, 'M', '32GB', 'Gold', '45', 'http://maktechblog.com/wp-content/uploads/2016/09/Samsung-Galaxy-J7-Prime.jpeg', 1, '1 year', 'US'),
(2, 'qgqvhirug4=', 'iPhone 6s', 'Make a difference with the new iPhone 6S with most premium built quality you can experience.', 549, 549, 1, 'M', '32 GB', 'Gold', '46', 'http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/2015/08/20/iphone-6s-apple-next-iphone-released-china-goophone-runs-android.jpeg', 1, '1 year', 'US'),
(3, 'qgqvhirug5=', 'iPhone SE', 'Apple iPhone SE has a 4-inch Retina Display. The smartphone comes with 12-megapixel iSight rear camera with support for Live Photos and 4K video support and 1.2-megapixel FaceTime camera with Retina Flash. It is powered by an A9 processor paired with M9 co-processor. The iPhone SE also supports always-on â€˜Hey Siriâ€™ feature. Connectivity options include 4G LTE, VoLTE and Bluetooth 4.2. It runs iOS 9.3 out of the box.', 183, 150, 1, '4 Inch', '', 'White', '46', 'https://tech2tech.com.cy/wp-content/uploads/Apple-iPhone-SE-Silver-Image-HD-Image-4-newst8.jpg', 1, '1 Year', 'US');


-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE IF NOT EXISTS `product_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `more_description` text NOT NULL,
  `warranty` varchar(255) NOT NULL,
  `processor` text NOT NULL,
  `vendor` text NOT NULL,
  `store_num` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `product_details`
--


INSERT INTO `product_details` (`id`, `product_id`, `more_description`, `warranty`, `processor`, `vendor`, `store_num`) VALUES
(1, 1, 'Featuring a full-metal unibody and a screen thatâ€™s equipped with 2.5D Gorilla Glass, this smartphone is as attractive as it is tough. Its 13.88 cm full HD display will bring all your photos and videos to life in crystal-clear detail.', '1 year', 'Exynos 7870 Octa Core 1.6 GHz', 'SAMSUNG', 'US'),
(2, 2, 'Retina HD Display with 3D Touch, LED Backlit Widescreen, 326 PPI, 500 cd/m2 Maximum Brightness, Full sRGB Standard, Dual Domain Pixels for Wide Viewing Angles, Fingerprint Resistant Oleophobic Coating, Display Zoom, Reachability.', '1 year', 'A9 Chip with 64-bit Architecture and M9 Motion Co-processor 1.84 GHz', 'Apple', 'US');


--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_details`
--


--
-- Constraints for table `product_details`
--
ALTER TABLE `product_details`
  ADD CONSTRAINT `product_fk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
