import React, { useState, useRef } from "react";
import Recipe from "./Recipe";
import IngridientsListItem from "./IngridientsListItem";

function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const formRef = useRef(null);


  

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    if (newIngredient && newIngredient.trim() !== "") {
      setIngredients((prev) => [...prev, newIngredient]);

      // Resets the form after submission
      formRef.current?.reset();
    }
  }

  

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

      {ingredients.length > 0 && <IngridientsListItem ingredients={ingredients} toggleRecipeShown={toggleRecipeShown}/>}

     {recipeShown && <Recipe/> }
      
    </main>
  );
}

export default Main;
