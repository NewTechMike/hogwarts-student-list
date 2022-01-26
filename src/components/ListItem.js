import React from "react";

function ListItem({s_name, id}){
  
  //console.log("(LI) Key: ", id)
  function handleRemove(){
    //alert("Are you sure you want to remove: ")
    fetch(`http://localhost:9292/students/${id}`, {
      method: "DELETE",
    })
    .then((r)=>r.json())
    .then(()=>console.log("(LI)Deleted ",s_name))
  }
  
  return(
    <div className = "listitem">
      <li>
        <h2>{s_name}, ID:{id}
          <button 
            className="remove"
            onClick={handleRemove}>Remove</button>
        </h2>
      </li>
    </div>
  )
}

export default ListItem;