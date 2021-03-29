import React,{useState,useEffect} from 'react'
import Tweet from './Tweet'
import './App.css'
import Dish from './dish'



function App(){

  const API_KEY = "c8dcf16e8686f6eef45c80d125f53b85"  
  const APP_ID = "257622dc"

  const [recipes,setRecipes] = useState([]);

  const [search,setSearch] = useState("");

  const [query,searchQuery] = useState("chicken");


  useEffect( async ()=>{
      get_recipes();
  }, [query]);


  const getSearch = e =>{
    e.preventDefault();
    searchQuery(search);
    setSearch('');
  }


  const get_recipes = async ()=>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)

      const data = await response.json();

      console.log(data.hits);

      setRecipes(data.hits);
  } 

  const updateSearch = (e)=>{
      setSearch(e.target.value);
      console.log(search);
  }


  return(

      <div className="app"> 
      
      <form onSubmit={getSearch} className="search-form">
        <div className="search-box"> 
          <input type="text" placeholder="Start Typing your favorite Dish" className="form-control" value={search} onChange={updateSearch}/>
        </div>
          <button type="submit" className="btn btn-success m-2">Search</button>          
      </form>

          <div className="d-flex justify-content-between flex-wrap">
          {recipes.map(recipe => (

                <Dish key={recipe.recipe.label} 
                      title={recipe.recipe.label} 
                      calories={recipe.recipe.calories} 
                      image = {recipe.recipe.image} 
                      cook = {recipe.recipe.ingredients} />
              ))};
          </div>
      
      </div>
  );

}


export default App;