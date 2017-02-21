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
USE demodb;
CREATE TABLE IF NOT EXISTS `accessory` (
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
  PRIMARY KEY (`id`)
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
-- Dumping data for table `accessory`
--
INSERT INTO `accessory` (`id`, `epid`, `name`, `description`, `retail_price`, `sale_price`, `promotion`, `size`, `configuration`, `skuid`, `active`, `picture`, `contract`, `store`, `color`) VALUES
(1, 'qgqvhirugu=', 'SAMSUNG Evo Plus 64 GB ', 'Capacity 64 GB MicroSDXC Class 10 Read Speed: 80 MB/s', 1699, 1389, 1, '', 'Micro SD card', '45-001', 1, 'http://s7d2.scene7.com/is/image/SamsungUS/Pdpdefault-mb-mc32da-am-600x600-C1-052016?$product-details-jpg$', 'none', 'IN', 'white'),
(2, 'qgqvhirugu=', 'Sennheiser CX213 Headphones  ', 'Canalphone Type:In-the-ear Compatible With: Mobile, Tablet', 1290, 949, 1, '', 'In ear head phones', '46-001', 1, 'http://cdn1.expertreviews.co.uk/sites/expertreviews/files/images/dir_320/er_photo_160069.jpg', 'none', 'IN', 'Black'),
(3, 'qgqvhirugu=', 'Lightning to USB Cable (2m)\r\n', 'This 2-meter USB 2.0 cable connects your iPhone, iPad, or iPod with Lightning connector to your computerâ€™s USB port for syncing and charging. Or you can connect to the Apple USB Power Adapter for convenient charging from a wall outlet.*\r\n            ', 29, 27, 1, '2 Meter', '', '47-001', 1, 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/D8/MD819/MD819?wid=572&hei=572&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1470090009525', 'No', 'US', 'White');


-- --------------------------------------------------------


-- Dumping data for table `accessory_details`
--
INSERT INTO `accessory_details` (`id`, `accessory_id`, `more_description`, `warranty`, `processor`, `vendor`, `store_num`) VALUES
(1, 1, '490 mins of Full HD Video or 1050 mins of HD Video or 15330 Songs, Save Over 5470 Photos, EMC (FCC, CE, VCCI, NATA) Certified, Smartphone, Tablet, Camera, Full HD Video Recording Support. Minimum Storage Temperature: -407deg;C, Resist Magnetic Fields of upto 15000 Gauss, Can Survive Upto 72 Hours in Seawater', '10 Year Limited Warranty', 'xww', 'SAMSUNG', 'IN'),
(2, 2, 'In the Ear Headphone, Wired Connectivity, Canalphone, 3.5 mm Headphone Jack', '2 Year Warranty', 'err', 'Sennheiser', 'IN');


--
-- Constraints for table `accessory`
--


--
-- Constraints for table `accessory_details`
--
ALTER TABLE `accessory_details`
  ADD CONSTRAINT `accessory_product_fk` FOREIGN KEY (`accessory_id`) REFERENCES `accessory` (`id`) ON DELETE CASCADE;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
