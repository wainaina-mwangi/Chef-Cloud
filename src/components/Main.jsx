import React from "react";

function Main() {
    function handleSubmit() {
        alert("hurray");
        
    }
  return (
    <main>
      <form onSubmit={handleSubmit} action="" className="add-form">
        {/* <label htmlFor="#">Add Ingridients</label> */}
        <input type="text" placeholder="e.g Capuchino " />
        <button>Add Ingridients</button>
      </form>
    </main>
  );
}

export default Main;
