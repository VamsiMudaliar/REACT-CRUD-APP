<?php 


	class Employees{

		private $conn;
		private $table = "employees_data";

		// Employees_data properties

		public $id;
		public $name;
		public $phone;
		public $company;
		public $salary;

		// constructor with DB

		public function __construct($db) {
			$this->conn = $db;
		}

		// Get All Employees   
		public function read() {
			// Create Query 
			$query = 'SELECT * FROM employees_data';

			// Create Prepared Statement

			$stmt = $this->conn->prepare($query);

			// Excute the Query

			$stmt->execute();

			return $stmt;
		}

		public function read_single(){


			$query = 'SELECT * FROM employees_data WHERE id=?';

			// Create Prepared Statement

			$stmt = $this->conn->prepare($query);

			// Excute the Query bind id in the array

			$stmt->bindParam(1,$this->id);

			$stmt->execute();

			$row = $stmt->fetch(PDO::FETCH_ASSOC);

			//set Properties

			$this->name = $row['emp_name'];
			$this->phone = $row['emp_phone'];
			$this->company = $row['emp_company'];
			$this->salary = $row['emp_salary'];
		}


		public function create(){

			$query = 'INSERT INTO ' . $this->table . '

			SET 
				emp_name = :emp_name,
				emp_phone = :emp_phone,
				emp_company = :emp_company,
				emp_salary = :emp_salary';

			$stmt = $this->conn->prepare($query);

			//Clean Data

			$this->name = htmlspecialchars(strip_tags($this->name));
			
			$this->phone = htmlspecialchars(strip_tags($this->phone));

			$this->company = htmlspecialchars(strip_tags($this->company));

			$this->salary = htmlspecialchars(strip_tags($this->salary));

			// Bind parameter

			$stmt->bindParam(':emp_name',$this->name);
			$stmt->bindParam(':emp_phone',$this->phone);
			$stmt->bindParam(':emp_company',$this->company);
			$stmt->bindParam(':emp_salary',$this->salary);


			if($stmt->execute()){
				return true;
			}

			// Print error if something goes wrong

			printf("Error: %s.\n",$stmt->error);


			return false;
		}
		public function update(){

			$query = 'UPDATE ' . $this->table . '

			SET 
				emp_name = :emp_name,
				emp_phone = :emp_phone,
				emp_company = :emp_company,
				emp_salary = :emp_salary

			WHERE 
				id = :id' ;

			$stmt = $this->conn->prepare($query);

			//Clean Data

			//$this->id = htmlspecialchars(strip_tags($this->id));

			$this->name = htmlspecialchars(strip_tags($this->name));
			
			$this->phone = htmlspecialchars(strip_tags($this->phone));

			$this->company = htmlspecialchars(strip_tags($this->company));

			$this->salary = htmlspecialchars(strip_tags($this->salary));

			// Bind parameter

			$stmt->bindParam(':id',$this->id);

			$stmt->bindParam(':emp_name',$this->name);
			$stmt->bindParam(':emp_phone',$this->phone);
			$stmt->bindParam(':emp_company',$this->company);
			$stmt->bindParam(':emp_salary',$this->salary);


			if($stmt->execute()){
				return true;
			}

			// Print error if something goes wrong

			printf("Error: %s.\n",$stmt->error);


			return false;
		}

		public function delete(){
			// query 
			$query = 'DELETE FROM '. $this->table. ' WHERE id=:id';

			$stmt = $this->conn->prepare($query);

			//Cleaning Data
			$this->id = htmlspecialchars(strip_tags($this->id));

			// Binding Parameters
			$stmt->bindParam(':id',$this->id);

			if($stmt->execute())
				return true;

			// Print error if something goes wrong

			printf("Error: %s.\n",$stmt->error);				

			return false;
		}

	};


?>