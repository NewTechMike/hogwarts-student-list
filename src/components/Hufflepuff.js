import React from "react";
import ListItem from "./ListItem";
import ListHouse from "./ListHouse";

function Hufflepuff({id, names, handleRemove}){
  const displayNames = names.filter((name)=>{
    return name.name
  })
  console.log("(H) Students: ", names)

  return(
    <div>
      <header>
        Hufflepuff Students
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

export default Hufflepuff;