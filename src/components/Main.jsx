import React from "react";

function Main() {
    function handleSubmit(e) {
      // e is for event
      // e.preventDefault stops the form for refresh
        e.preventDefault();
        
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
