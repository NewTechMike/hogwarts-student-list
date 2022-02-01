import React from "react";
import ListItem from "./ListItem";
import ListHouse from "./ListHouse";

function Ravenclaw({id, names, handleRemove}){
  const displayNames = names.filter((name)=>{
    return name.name
  })
  console.log("(R) Students: ", names)

  return(
    <div>
      <header>
      Ravenclaw Students
      </header>
      {displayNames.map((names) =>{
        return <ListHouse
        key={names.id}
        id={names.id}
        house={names.name}
    /> 
    })}
    </div>
  )
}

export default Ravenclaw;