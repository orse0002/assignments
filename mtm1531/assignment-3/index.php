<?php

require_once 'includes/validate.php';

?><!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<title>Contact Form</title>
	<link href="css/general.css" rel="stylesheet">
</head>
<body>
	<?php if ($complete) : ?>
	<strong>Thanks for the Message</strong>
	<?php else : ?>

	<form method="post" action="index.php">
		<div>
			<label for="name">Name<?php if (isset($errors['name'])) : ?> <strong>is required</strong><?php endif; ?></label>
			<input id="name" name="name" value="<?php echo $name; ?>" required>
		</div>
        
		<div>
			<label for="email">E-mail Address<?php if (isset($errors['email'])) : ?> <strong>is required</strong><?php endif; ?></label>
			<input type="email" id="email" name="email" value="<?php echo $email; ?>" required>
		</div>
        
        <div>
			<label for="user">User Name<?php if (isset($errors['user'])) : ?> <strong>must be at less than 25 characters</strong><?php endif; ?></label>
			<input id="user" name="user" value="<?php echo $user; ?>" required>
		</div>
        
        <div>
			<label for="pass">Password<?php if (isset($errors['pass'])) : ?> <strong>is required</strong><?php endif; ?></label>
			<input id="pass" name="pass" value="<?php echo $pass; ?>" required>
		</div>
        
        <fieldset>
            <label for="lang"> Preferred Language:<?php if (isset($errors['lang'])) : ?><strong>is required</strong><?php endif; ?></label>
            
            <label for="english">English</label>
            <input type="radio" id="english" name="lang" value="e"<?php if ($lang == 'e') {
            echo ' checked';}?> required>
           
             <label for="french">French</label>
            <input type="radio" id="french" name="lang" value="f"<?php if ($lang == 'f') {
            echo 'checked';}?> required>
           
            <label for="spanish">Spanish</label>
            <input type="radio" id="spanish" name="lang" value="s"<?php if ($lang == 's') {
            echo 'checked';}?> required>      
		</fieldset>
        
		<div>
			<label for="note">Notes</label>
			<textarea id="note" name="note"></textarea>
		</div>
		
		<div>
			<label for="terms">Accept Terms?<?php if (isset($errors['terms'])) : ?><strong class="error">you forgot to accept</strong><?php endif; ?></label>
            <input type="checkbox" id="terms" name="terms" value="1" required>

		</div>
        
		<div>
			<button type="submit">Send Message</button>
		</div>
	</form>
    
	<?php endif; ?>
</body>
</html>











