<?php

session_start();

//Fake a login
$_SESSION['user_id'] = 1;


$db = new PDO('mysql:dbname=todo-php;host=localhost', 'root', '');

// Handle this properly cause this is really bad
if(!isset($_SESSION['user_id'])) {
  die('You are not signed in.');
}

?>
