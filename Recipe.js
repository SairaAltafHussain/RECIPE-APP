import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe p-4 m-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-700">{calories.toFixed(2)} calories</p>
      <img className="w-full h-48 object-cover rounded-lg mt-2" src={image} alt={title} />
      <ul className="list-disc list-inside mt-2">
        {ingredients.map((ingredient) => (
          <li key={ingredient.text} className="text-gray-600">{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;



