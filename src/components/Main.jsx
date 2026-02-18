import React, { useState, useRef } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const formRef = useRef(null);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    if (newIngredient && newIngredient.trim() !== "") {
      setIngredients((prev) => [...prev, newIngredient]);
      
      // Resets the form after submission
      formRef.current?.reset();
    }
  }

  const ingredientListItems = ingredients.map((item, index) => (
    <li className="list-children" key={index}>
      {item}
    </li>
  ));

  return (
    <main>
      <form ref={formRef} action={addIngredient} className="add-form">
        <input 
          type="text" 
          placeholder="e.g. Cappuccino" 
          name="ingredient" 
          required 
        />
        <button type="submit">Add Ingredient</button>
      </form>

      <section>
        <h2>Ingredient List</h2>
        {ingredients.length === 0 ? (
          <p>No ingredients added yet</p>
        ) : (
          <ul className="list-item">{ingredientListItems} </ul>
        )}
      </section>

      {ingredients.length > 0 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p className="heading">Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="get-btn">
            Get Recipe
          </button>
        </div>
      )}
    </main>
  );
}

export default Main;