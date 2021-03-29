import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import axios from 'axios'

const AddEmp = ()=>{

	const [res,setRes] = useState({});

	const [Username,setUsername] = useState('');
	const [Phone,setPhone] = useState('');
	const [Company,setCompany] = useState('');
	const [Salary,setSalary] = useState('');
	 
	const r = useParams()
	const history = useHistory()
		console.log(history)
	const get_single_user = async ()=>{

		const result = await axios.get(`http://localhost/Rest%20Api%20PHP/api/employees/read_single.php?id=${r.id}`);

		const emp_data = await result.data

		setRes(emp_data)

		setUsername(emp_data.employee_name)
		setPhone(emp_data.employee_phone)
		setCompany(emp_data.employee_company)
		setSalary(emp_data.employee_salary)

	}

	// const set_default_values = ()=>{
	// 	setUsername(res.employee_name)
	// 	setPhone(res.employee_phone)
	// 	setCompany(res.employee_company)
	// 	setSalary(res.employee_salary)
	// }

	const updateUser = e =>{
		e.preventDefault();
		
		const ready_data = {
			"id":r.id,
			"emp_name":Username,
			"emp_phone":Phone,
			"emp_salary":Salary,
			"emp_company":Company
		}
		console.log("Prepared Data : ",ready_data)

		axios.put(`http://localhost/Rest%20Api%20PHP/api/employees/update.php?id=${r.id}`,ready_data)
		.then(data=>{
			console.log(data)
			history.push('/')
		}).catch(err=>{
			console.log(err);
		})
		

	}

	useEffect(()=>{
		get_single_user()
	},[])

	return (
		<div className="d-flex justify-content-center flex-column align-items-center">
		<h2 className="text-primary mt-3"> Add Employee </h2>
			
			<div class="col-lg-6">		
			<form className="p-3" onSubmit={(e)=> updateUser(e)}>
				<input type="text" className="form-control m-2" placeholder="Employee Name" onChange={(e)=>setUsername(e.target.value)}  defaultValue={res.employee_name}/>
				
				<input type="text" className="form-control m-2" placeholder="Employee Phone Number" onChange={(e)=>setPhone(e.target.value)} defaultValue={res.employee_phone} autocomplete="false" />
				
				<input type="text" className="form-control m-2" placeholder="Employee Company" onChange={(e)=>setCompany(e.target.value)} defaultValue={res.employee_company} autocomplete="false"/>
				
				<input type="Salary" className="form-control m-2" placeholder="Employee Salary" onChange={(e)=>setSalary(e.target.value)} defaultValue={res.employee_salary}/>

				<input type="submit" className="btn btn-md btn-primary" value="Submit"/>
				
			</form>
			</div>
		</div>
	);
}



export default AddEmp;