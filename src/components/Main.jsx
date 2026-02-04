import React from "react";
import { useState } from "react";

function Main() {
  const []=useState();
    function handleSubmit(e) {
      // e is for event
      // e.preventDefault stops the form for refresh
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngridient = formData.get("ingridients");
        console.log(newIngridient);
        
        
    }
  return (
    <main>
      <form onSubmit={handleSubmit} action="" className="add-form">
        {/* <label htmlFor="#">Add Ingridients</label> */}
        <input type="text" placeholder="e.g Capuchino " name="indgridients" />
        <button>Add Ingridients</button>
      </form>
    </main>
  );
}

export default Main;
