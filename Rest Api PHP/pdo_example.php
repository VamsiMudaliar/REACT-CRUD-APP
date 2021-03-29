<?php 

$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'employees';


// Set the DSN

$dsn = 'mysql:host='. $host . ';dbname='. $dbname;

$pdo = new PDO($dsn,$user,$password);

#PRDO QUERY 


//$stmt = $pdo->query('SELECT * FROM employees_data');

//while($row = $stmt->fetch()){
//	echo $row['name'] . '<br>';
//}


#PREPARED STATEMENTS (prepare and execute)

//$sql = "SELECT *FROM employees_data"

// Fetching posts using createstatement

$sql = "SELECT * FROM posts WHERE author =? "

$stmt = $pdo->prepare($sql);
$stmt->execute([])





?>