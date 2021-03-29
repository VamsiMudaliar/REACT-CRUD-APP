<?php 

// Headers 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization,X-Requested-With');



include_once '../../config/Database.php';
include_once '../../models/employees.php';



// Instantiate DB and Connect 

$database = new Database();

$db = $database->connect();

$emp = new Employees($db);

// GET THE RAW POSTED DATA;

$data = json_decode(file_get_contents('php://input'));

// CREATE POST 

$emp->id = isset($_GET['id']) ? $_GET['id'] : die();


if($emp->delete()){
	echo json_encode(array('message'=>'Employee Deleted' ));
}
else{
	echo json_encode(array('message'=>'Couldn\'t delete Employee'));
}


?>