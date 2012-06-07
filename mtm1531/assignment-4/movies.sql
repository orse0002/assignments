-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 07, 2012 at 05:47 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `orse0002`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_titles` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `director` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `release_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `movie_titles`, `director`, `release_date`) VALUES
(1, 'Mean Streets', 'Martin Scorsese', '1973-10-14'),
(2, 'The Last Waltz', 'Martin Scorsese', '1978-04-26'),
(3, 'Goodfellas', 'Martin Scorsese', '1990-09-19'),
(4, 'Gangs of New York', 'Martin Scorsese', '2002-12-20'),
(5, 'George Harrison: Living in the Material World', 'Martin Scorsese', '2011-10-04');
