import React from "react";
import { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([]); 

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    

    const newIngredient = formData.get("indgridients"); 

    if (newIngredient && newIngredient.trim() !== "") {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
      e.currentTarget.reset();
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-form">
        <input type="text" placeholder="e.g Capuchino" name="indgridients" />
        <button type="submit">Add Ingredient</button>
      </form>

      <ul className="list-item">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

export default Main;