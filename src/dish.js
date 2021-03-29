import React,{useState,useEffect} from 'react'


const Dish = (props)=>{

	const [cook,setCook] = useState(false);

	const setValue = ()=>{
		setCook(!cook);
	}


	return (

		<div className=" d-flex flex-column m-3">
		
		<div className="d-flex align-items-center">
			<img src={props.image} alt="Something" className="dish-image img-thumbnail img-responsive grow" />
		</div>
		<div className="col-lg-6 pt-2">
			<h4> {props.title} </h4>
			<p><b> Calories :</b> {Math.round(props.calories,2)}; </p>
			<button onClick={setValue} class="btn btn-danger">Ingredients</button>
			<div className={cook?"":"showIng"}>
				<ol>
				{
					props.cook.map(e=>(
						<li>{e.text}</li>
					))
				}
				</ol>
			</div>


		</div>

		</div>
	);


}

export default Dish;