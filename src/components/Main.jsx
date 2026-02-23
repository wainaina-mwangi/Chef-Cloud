import React, { useState, useRef } from "react";

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

      {ingredients.length > 2 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p className="heading">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button onClick={toggleRecipeShown} className="get-btn">
            Get Recipe
          </button>
        </div>
      )}

     {recipeShown && <article class="recipe-card">
        <header>
          <h1>Classic Garlic Butter Shrimp</h1>
          <p class="description">
            A quick, flavorful Mediterranean-style dish perfect for busy
            weeknights.
          </p>

          <div class="recipe-meta">
            <span>
              <strong>Prep:</strong> 10 mins
            </span>{" "}
            |
            <span>
              <strong>Cook:</strong> 15 mins
            </span>{" "}
            |
            <span>
              <strong>Servings:</strong> 4
            </span>
          </div>
        </header>

        <hr />

        <section class="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>1 lb Large shrimp (peeled and deveined)</li>
            <li>4 tbsp Unsalted butter</li>
            <li>4 cloves Garlic (minced)</li>
            <li>1/4 cup Fresh parsley (chopped)</li>
            <li>2 tbsp Lemon juice</li>
            <li>1/2 tsp Red pepper flakes</li>
          </ul>
        </section>

        <section class="instructions">
          <h2>Instructions</h2>
          <ol>
            <li>
              Pat the shrimp dry with paper towels and season with salt and
              pepper.
            </li>
            <li>In a large skillet, melt the butter over medium-high heat.</li>
            <li>
              Add the garlic and red pepper flakes; sauté for 1 minute until
              fragrant.
            </li>
            <li>
              Add the shrimp to the skillet and cook for 2-3 minutes per side
              until pink and opaque.
            </li>
            <li>Stir in the lemon juice and parsley. Toss to coat evenly.</li>
            <li>Remove from heat and serve immediately over pasta or rice.</li>
          </ol>
        </section>
      </article>}
    </main>
  );
}

export default Main;
