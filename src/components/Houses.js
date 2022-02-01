import React from "react";
import ListHouse from "./ListHouse";

function Houses({name}){

  const displayHouses = name.map((names, id) => {
    return <ListHouse 
      key={id}
      house={names}
    />
    }
  )
  return(
    <div>
       {displayHouses}
    </div>
  )
}

export default Houses;