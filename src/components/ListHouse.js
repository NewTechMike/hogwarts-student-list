import React from "react";

function ListHouse({house}){


  return(
    <div className = "listhouse">
      <h2>
        <li>
          {house}
        </li>
      </h2>
    </div>
  )
}

export default ListHouse;