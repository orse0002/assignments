<?php

//Open a connection to the MySQL database
//Shared between all the PHP files in our application


//Username & Passwrd are kept in Environment Variables, in .htaccess
//This is for security - so they are never publicly visible on GitHub
$user = getenv('DB_USER');//MySQL username
$pass = getenv('DB_PASS');//MySQL password
$data_source = getenv('DATA_SOURCE');

//PDO: PHP Data Objects
//Allows us to connect to many different kinds of databases
$db = new PDO($data_source, $user, $pass);
//Force the connection to communicate in UTF-8
//Supports many languages
$db->exec('SET NAMES utf8');
?>