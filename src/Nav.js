import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import './App.css'

const Nav = ()=>{

	return (

		<nav className="navbar navbar-expand-sm navbar-dark bg-success" >
		  <a className="navbar-brand" href="#">Employee Management Portal</a>
		  <ul class="navbar-nav">
		    
		    <Link to="/">
		    <li className="nav-item">
		      		<a className="nav-link" href="#!">Home</a>
		    </li>
		    </Link>

		    <Link to="/about">
		    <li className="nav-item">
		      		<a className="nav-link" href="#!">About</a>
		    </li>
		    </Link>


		    <Link to="/addEmployee">
		    <li className="nav-item">
		      		<a className="nav-link" href="#!">Add Employee</a>
		    </li>
		    </Link>
		  </ul>
		</nav>
	);
}



export default Nav;