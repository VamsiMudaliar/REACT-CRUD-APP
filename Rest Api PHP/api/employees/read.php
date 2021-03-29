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

// Get all Employees 

$result = $emp->read();

// get total rows 

$num_rows = $result->rowCount();

if($num_rows>0){
	// Inialize an Array 
	$emp_arr = array();
	$emp_arr['data'] = array();

	while($row = $result->fetch(PDO::FETCH_ASSOC)){
		extract($row);

		$emp_item = array(

			'id' => $id,
			'employee_name' => $emp_name,

			'employee_phone' => $emp_phone,

			'employee_company' => $emp_company,
			'employee_salary' => $emp_salary
		);
		
		// push this data item to emp Data 
		array_push($emp_arr['data'],$emp_item);
	}
	// convert it into JSON 

	echo json_encode($emp_arr);


}
else{
	// No Posts
	echo json_encode(
		array('Message' => 'No Posts Found')
	);
}


?>
