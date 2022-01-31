import React from "react";

function ListHouse({house_name}){


  return(
    <div className = "listhouse">
      <h2>
        <li>
          {house_name}
        </li>
      </h2>
    </div>
  )
}

export default ListHouse;