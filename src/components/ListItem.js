import React from "react";

function ListItem({student_name, id, onRemove}){

  console.log("(LI)S N: ", student_name)
  console.log("(LI)S ID: ", id)
  function handleRemoveClick(){
    fetch(`http://localhost:9292/students/${id}`, {
      method: "DELETE",
    });
   onRemove(id);
   console.log("(LI)Remove ID: ", id)
  }

  return(
    <div className = "listitem">  
      <h2> 
        <li style={{"fontSize": 25}}>
          {student_name} 
          <button 
            className="remove"
            onClick={handleRemoveClick}>
              Remove
          </button> 
        </li>   
      </h2>
    </div>       
    )     
}


export default ListItem;