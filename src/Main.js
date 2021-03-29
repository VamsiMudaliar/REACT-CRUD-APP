import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route,useParams,useHistory} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import About from './About'
import Shop from './Shop'
import {Link} from 'react-router-dom';
import Nav from './Nav'
import AddEmp from './AddEmp'
import updateEmp from './updateEmp'
const Main = ()=>{


	return (

		<div className="App">

		<Router>
			<Nav />
			
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/shop" component={Shop}/>
				<Route path="/addEmployee" component={AddEmp}/>
				<Route path="/update/:id" component={updateEmp}/>
				
			</Switch>
		
		</Router>

		</div>
	);
}


const Home = ()=>{

	const history = useHistory();
	
	const [response,setResponse] = useState([]);


	const get_employee_details = async ()=>{
      const response = await axios.get(`http://localhost/Rest%20Api%20PHP/api/employees/read.php`)

      const emp_data = response.data;

      setResponse(emp_data.data);
  } 

  	const deleteEmployee = (emp_id)=>{
  		axios.delete(`http://localhost/Rest%20Api%20PHP/api/employees/delete.php?id=${emp_id}`)
  		.then(data=>{
  			console.log("Data Deleted .... ")
  			window.location.reload()
  		})

  	}

	const vd = useEffect(()=>{
		get_employee_details();
	},[]);

	return (
		<div class="m-4">
		<table className="table table-bordered table-hover table-stripe">
		<thead>
		    <tr>
		        <th> Employee Name </th>
		        <th> Company </th>
		        <th> Phone </th>
		        <th> Salary </th>
		        <th>Operation</th>
		    </tr>
		</thead> 
		<tbody>
		{response.map(data=>(

		 	<tr key={data.id}>
		        <td> {data.employee_name} </td>
		        <td> {data.employee_company} </td>
		        <td> {data.employee_phone} </td>
		        <td>{data.employee_salary} $</td>
		        <td>
		        <Link to={`update/${data.id}`}>
		        	<a href="#" className="btn m-1 btn-sm btn-success">Update</a>
		        </Link>
		        	<a href="#" className="btn m-1 btn-sm btn-danger" onClick={()=>deleteEmployee(data.id)}>Delete</a>
		        </td>
		    </tr>


		))}
		</tbody>
		</table>
		</div>
	);

};


export default Main;