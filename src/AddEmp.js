import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import axios from 'axios'


const AddEmp = ()=>{

	const [Username,setUsername] = useState('');
	const [Phone,setPhone] = useState('');
	const [Company,setCompany] = useState('');
	const [Salary,setSalary] = useState('');

	const history = useHistory()

	const addEmployee = (e)=>{
		e.preventDefault()
		const data_ready={
			emp_name : Username,
			emp_phone : Phone,
			emp_company : Company,
			emp_salary : Salary
		} 

		const config = {
		headers :{
			'Content-Type':'application/x-www-form-urlencoded',
			'Accept':'application/json'
		}}

		axios.post(`http://localhost/Rest%20Api%20PHP/api/employees/create.php`,data_ready,config)
		.then(data=>console.log("Data Added",data))

		console.log(data_ready)
		history.push('/')
	}


	return (
		<div className="d-flex justify-content-center flex-column align-items-center">
		<h2 className="text-success mt-3"> Add Employee </h2>
			
			<div class="col-lg-6">		
			<form className="p-3" onSubmit ={ (e)=>addEmployee(e) }>
				<input type="text" className="form-control m-2" placeholder="Employee Name" onChange = {(e)=>setUsername(e.target.value)}/>
				
				<input type="text" className="form-control m-2" placeholder="Employee Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
				
				<input type="text" className="form-control m-2" placeholder="Employee Company" onChange={(e)=>setCompany(e.target.value)}/>
				
				<input type="Salary" className="form-control m-2" placeholder="Employee Salary" onChange = {(e)=>setSalary(e.target.value)}/>

				<input type="submit" className="btn btn-md  btn-primary" value="Submit"/>
				
			</form>
			</div>
		</div>
	);
}



export default AddEmp;