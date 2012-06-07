<?php 

$errors = array();
$complete = false;

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$user = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
$pass = filter_input(INPUT_POST, 'password', FILTER_UNSAFE_RAW);
$lang = filter_input(INPUT_POST, 'lang', FILTER_SANITIZE_STRING);


if ($_SERVER['REQUEST_METHOD'] == 'POST') { // Check to see if the form has been submitted before validating
	if (empty($name)) {
		$errors['name'] = true;
	}
	
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$errors['email'] = true;
	}
	
	if (strlen($user) <1 || strlen($user) > 25) { // mb_strlen = multi-byte string length
		$errors['user'] = true;
	}
	
	if (empty ($pass)) {
		$errors['pass'] = true;
	}
	
	if (!in_array($lang, array('e', 'f', 's'))) 
		$errors['lang'] = true;
	
	
	if (!isset($_POST['terms'])) {
		$errors['terms'] = true;
	}
	
	if (empty($errors)){
		$complete = true;
		mail($email, 'Thanks for your feedback', 'Thanks for your feedback', "From: Patrick Orser <patrickosrer@gmail.com>\r\n");
	}
	
}

?>