SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `anyone`
--

-- --------------------------------------------------------

--
-- Table structure for table `accessory`
--

CREATE TABLE IF NOT EXISTS `accessory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
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
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `accessory_details`
--

CREATE TABLE IF NOT EXISTS `accessory_details` (
  `id` int(11) NOT NULL,
  `accessory_id` int(11) NOT NULL,
  `more_description` text NOT NULL,
  `warranty` varchar(255) NOT NULL,
  `processor` text NOT NULL,
  `vendor` varchar(255) NOT NULL,
  `store_num` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `accessory_id` (`accessory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Dumping data for table `product`
--

INSERT INTO `accessory` (`id`, `user_id`, `name`, `description`, `retail_price`, `sale_price`, `promotion`, `size`, `configuration`, `color`, `skuid`, `picture`, `active`, `contract`, `store`) VALUES
(1, 1, 'SAMSUNG High Quality HeadPhone', 'Best wireless headset.', 69, 40, 1, 'M', '32GB', 'Gold', '45', 'https://rukminim1.flixcart.com/image/832/832/mobile/v/z/x/samsung-galaxy-on-nxt-sm-g610fzdgins-original-imaenkzvmnyf7sby.jpeg?q=70', 1, '1 year', 'US'),
(2, 1, 'iPhone 6s', 'Best iPhone Quality HeadSet', 49, 49, 1, 'M', '32 GB', 'Rose Gold', '46', 'https://rukminim1.flixcart.com/image/832/832/mobile/g/m/8/apple-iphone-6s-mn122hn-a-original-imaen3f3ubsf8zn3.jpeg?q=70', 1, '1 year', 'US');

-- --------------------------------------------------------


-- Dumping data for table `product_details`
--

INSERT INTO `accessory_details` (`id`, `accessory_id`, `more_description`, `warranty`, `processor`, `vendor`, `store_num`) VALUES
(1, 1, 'Accessory 1 details.', '1 year', 'Exynos 7870 Octa Core 1.6 GHz', 'SAMSUNG', 'US'),
(2, 2, 'Accessory 2 details.', '1 year', 'A9 Chip with 64-bit Architecture and M9 Motion Co-processor 1.84 GHz', 'Apple', 'US');


ALTER TABLE `accessory_details`
  ADD CONSTRAINT `accessory_fk` FOREIGN KEY (`accessory_id`) REFERENCES `accessory` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
