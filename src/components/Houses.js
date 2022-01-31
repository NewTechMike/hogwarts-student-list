import React from "react";
import ListHouse from "./ListHouse";

function Houses({name}){

  const displayHouses = name.map((names, id) => {
    return <ListHouse 
      key={id}
      house_name={names}
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