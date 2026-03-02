import React from 'react'

function IngridientsListItem(props) {
    // 1. Added a fallback empty array [] so .map() never fails
    const ingredients = props.ingredients || [];

    const ingredientListItems = ingredients.map((item, index) => (
        <li className="list-children" key={index}>
            {item}
        </li>
    ));

    return (
        <section>
            <h2>Ingredients on hand</h2>
            <ul className='ingridient-list'>{ingredientListItems}</ul>
            {ingredients.length > 3 && (
                <div className='get-recipe-container'>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button className='get-btn' onClick={props.toggleRecipeShown}>Get Recipe</button>
                </div>
            )}
        </section>
    )
}

export default IngridientsListItem