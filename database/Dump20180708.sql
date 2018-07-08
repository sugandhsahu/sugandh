CREATE DATABASE  IF NOT EXISTS `oldbooks` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `oldbooks`;
-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: oldbooks
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `listings`
--

DROP TABLE IF EXISTS `listings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `listings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Bookname` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `price` float NOT NULL DEFAULT '0',
  `condition` enum('New','Almost New','Sight Damaged','Worn') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `sellerEmail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sellerEmail` (`sellerEmail`),
  CONSTRAINT `listings_ibfk_1` FOREIGN KEY (`sellerEmail`) REFERENCES `users` (`email`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listings`
--

LOCK TABLES `listings` WRITE;
/*!40000 ALTER TABLE `listings` DISABLE KEYS */;
INSERT INTO `listings` VALUES (1,'toc','XYZ',870,'New','2018-07-08 06:56:21','2018-07-08 06:56:21','sugandh@gmail.com'),(2,'C#','XYZ',7,'Almost New','2018-07-08 07:55:06','2018-07-08 07:55:06','ppssingh69@gmail.com');
/*!40000 ALTER TABLE `listings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message1s`
--

DROP TABLE IF EXISTS `message1s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `message1s` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `selleridEmail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `selleridEmail` (`selleridEmail`),
  CONSTRAINT `message1s_ibfk_1` FOREIGN KEY (`selleridEmail`) REFERENCES `users` (`email`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message1s`
--

LOCK TABLES `message1s` WRITE;
/*!40000 ALTER TABLE `message1s` DISABLE KEYS */;
INSERT INTO `message1s` VALUES (1,'hello','sugandh@gmail.com','2018-07-08 16:09:20','2018-07-08 16:09:20','sugandh@gmail.com'),(2,'hiiiiiii','sugandh@gmail.com','2018-07-08 16:15:45','2018-07-08 16:15:45','sugandh@gmail.com');
/*!40000 ALTER TABLE `message1s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `college` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phno` bigint(10) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('priya','ppssingh69@gmail.com','bnd','kanpur',8687301068,'amarbahadur','2018-07-06 17:11:58','2018-07-06 17:11:58'),('sugandh','sugandh@gmail.com','jims','rohini',9873988338,'sugandh','2018-07-03 08:07:09','2018-07-03 08:07:09'),('sugandh','sugandh1@gmail.com','jims','rohini',9873988338,'sugandh','2018-07-03 08:07:35','2018-07-03 08:07:35'),('sugandh','sugandh2@gmail.com','jims','rohini',9873878338,'sugandh','2018-07-08 07:24:35','2018-07-08 07:24:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlists`
--

DROP TABLE IF EXISTS `wishlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `wishlists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Bookname` varchar(255) NOT NULL,
  `Booksellerid` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `useridEmail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `useridEmail` (`useridEmail`),
  CONSTRAINT `wishlists_ibfk_1` FOREIGN KEY (`useridEmail`) REFERENCES `users` (`email`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlists`
--

LOCK TABLES `wishlists` WRITE;
/*!40000 ALTER TABLE `wishlists` DISABLE KEYS */;
INSERT INTO `wishlists` VALUES (1,'toc','sugandh@gmail.com','2018-07-08 06:57:07','2018-07-08 06:57:07','sugandh@gmail.com'),(2,'toc','sugandh@gmail.com','2018-07-08 07:26:36','2018-07-08 07:26:36','sugandh2@gmail.com'),(3,'toc','sugandh@gmail.com','2018-07-08 07:54:10','2018-07-08 07:54:10','ppssingh69@gmail.com'),(4,'C#','ppssingh69@gmail.com','2018-07-08 13:08:03','2018-07-08 13:08:03','sugandh@gmail.com'),(5,'toc','sugandh@gmail.com','2018-07-08 13:44:38','2018-07-08 13:44:38','sugandh@gmail.com'),(6,'toc','sugandh@gmail.com','2018-07-08 14:17:13','2018-07-08 14:17:13','sugandh@gmail.com'),(7,'toc','sugandh@gmail.com','2018-07-08 14:48:57','2018-07-08 14:48:57','sugandh@gmail.com'),(9,'toc','sugandh@gmail.com','2018-07-08 15:21:19','2018-07-08 15:21:19','sugandh@gmail.com');
/*!40000 ALTER TABLE `wishlists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-08 23:12:17
