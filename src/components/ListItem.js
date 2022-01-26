import React from "react";

function ListItem({s_name, id, s_year}){
  
  //console.log("(LI) Key: ", id)
  function handleRemove(){
    //alert("Are you sure you want to remove: ")
    fetch(`http://localhost:9292/students/${id}`, {
      method: "DELETE",
    })
    .then((r)=>r.json())
    .then(()=>console.log("(LI)Deleted ",s_name))
  }

  //Below: Update a students year_at_school when the next
  // year comes. 
  //Maybe: Use button?
  /*
  function reasonToUpdate(){
    fetch(`http://localhost:9292/students/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        year_at_school: year_at_school + 1
      }),
    })
    .then((r)=>r.json())
    .then((updatedStudent)=>console.log(updatedStudent))
  }
  */

  return(
    <div className = "listitem">
      <li>
        <h2>{s_name}, ID:{id}, Year in School: {s_year}
          <button 
            className="remove"
            onClick={handleRemove}>Remove</button>
        </h2>
      </li>
    </div>
  )
}

export default ListItem;