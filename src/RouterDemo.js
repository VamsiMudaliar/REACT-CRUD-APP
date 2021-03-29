import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import About from './About'
import Shop from './Shop'
import {Link} from 'react-router-dom';


const RouterDemo = ()=>{

	return (
		<Router>
		<div className="App">
			<p>Something Put a Navbar here</p>

			<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/shop" component={Shop}/>
			</Switch>

		</div>
		</Router>
	);
}


const Home = ()=>{

	return (
		<h1>Home Component</h1>
	);

};


export default RouterDemo;