import React from 'react'

function Tweet(props){

	return (

		<div className="tweet">
			<h4>{props.name}</h4>
			<p>{props.company}</p>
			<p>{props.role}</p>
			
			<button>Like</button>
		</div>

	);
}


export default Tweet;