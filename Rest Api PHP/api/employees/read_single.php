<?php 

// Headers 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/employees.php';



// Instantiate DB and Connect 

$database = new Database();

$db = $database->connect();

// Instantiate Employee Object

$emp = new Employees($db);

// GET ID from URL 

$emp->id = isset($_GET['id']) ? $_GET['id'] : die();

$emp->read_single();

// Create an Array 

$emp_array = array(

	"id"=> $emp->id,
	
	"employee_name"=> $emp->name,

	"employee_phone"=> $emp->phone,

	"employee_company"=> $emp->company,

	"employee_salary"=> $emp->salary
);

print_r(json_encode($emp_array));

?>