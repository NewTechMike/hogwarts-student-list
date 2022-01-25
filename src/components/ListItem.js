import React from "react";

function ListItem({s_name}){
  return(
    <div className = "listitem">
      <li>
        <h2>{s_name}</h2>
      </li>
    </div>
  )
}

export default ListItem;