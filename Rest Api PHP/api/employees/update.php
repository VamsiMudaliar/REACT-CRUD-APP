<?php 

// Headers 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization,X-Requested-With');



include_once '../../config/Database.php';
include_once '../../models/employees.php';



// Instantiate DB and Connect 

$database = new Database();

$db = $database->connect();

$emp = new Employees($db);

// GET THE RAW POSTED DATA;

$data = json_decode(file_get_contents('php://input'));


$emp->id = isset($_GET['id']) ? $_GET['id'] : die();

$emp->name = $data->emp_name;
$emp->phone = $data->emp_phone;
$emp->company = $data->emp_company;
$emp->salary = $data->emp_salary;

// CREATE POST 

if($emp->update()){
	echo json_encode(array('message'=>'Employee Details Updated' ));
}
else{
	echo json_encode(array('message'=>'Couldn\'t Update Employee Details'));
}


?>