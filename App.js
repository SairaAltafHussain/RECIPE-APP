import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
const App = () => {
const APP_ID = "fa6fdf86";
const APP_KEY = "83c74dd3d52d4f1f5af6dbc83bbcbb30";
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');
useEffect(() => {
getRecipes();
},
[query]);
const getRecipes = async () => {
const response = await fetch(
`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=da1a7322&app_key=fc5def15154989a1c5735070870c2818%09`
);
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);
};
const updateSearch = e => {
setSearch(e.target.value);


}
const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    }
return (

  <div className="min-h-screen bg-gradient-to-r from-pink-300 via-red-200 to-pink-200 ">
  <form onSubmit={getSearch} className="min-h-[10vh] flex justify-center items-center">
    <input
      className="w-1/2 border-none p-2"
      type="text"
      value={search}
      onChange={updateSearch}
    />
    <button className="bg-lightcoral border-none p-2 text-white" type="submit">
      Search
    </button>
  </form>
  <div className="flex justify-around flex-wrap">
    {recipes.map(recipe => (
    <Recipe
    key={recipe.recipe.label}
    title={recipe.recipe.label}
    calories={recipe.recipe.calories}
    image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />

    ))}
  </div>
  </div>
);
};
export default App;
