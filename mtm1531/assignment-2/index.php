<?php

$first_num = 0;
$second_num = 0;
$function = 0;
$number = 0;

if (isset ($_POST['first_num'])){
	$first_num=$_POST['first_num'];
}
if (isset ($_POST['second_num'])){
	$second_num=$_POST['second_num'];
}
if (isset ($_POST['function'])){
	$function=$_POST['function'];
}

switch ($function){
	case '+':
	$number = $first_num + $second_num;
	break;
	
	case '-':
	$number = $first_num - $second_num;
	break;
	
	case '*':
	$number = $first_num * $second_num;
	break;
	
	case '/':
	$number = $first_num / $second_num;
	break;
}

$total = $number * 1.13;


?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Assignment-2</title>
</head>
<body>
	<form action="index.php" method="post">
    	<label for="fist_num">First Number</label>
        <input type="number" id="first_num" name="first_num">
        
        <label for="second_num">Second Number</label>
        <input type="number" id="second_num" name="second_num">
        
        <label for="function">Function</label>
        <select id="function" name="function">
        	<option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
         </select>
         
         <button>GO!</button>
         <p>$<?php echo number_format ($total, 2);?></p>
         
         </form>




</body>
</html>
