import React, { useState } from "react";

function NewStudent(){
  const [name, setName] = useState(" ");


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }//This will allow a random number to be generated

  function handleAddNew(e){
    e.preventDefault();
    const nameData = {
      name: name,
      year_at_school: 1,
      house_id: (getRandomInt(4) + 1) //This will "sort" the new student
    };
    fetch("http://localhost:9292/students", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nameData),
    })
    .then((r)=>r.json())
    .then((newStudent)=>console.log(newStudent))
  }

  return(
    <form className="NewStudent" onSubmit={handleAddNew}>
      <label>
        Name:
        <input 
          type="text"
          name="name"
          value={name}
          onChange = {(e) => setName(e.target.value)}
          />
      </label>
      <button type="submit">Add New Student</button>
    </form>
  );
}

export default NewStudent;