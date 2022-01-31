import React from "react";
import ListItem from "./ListItem";

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
        return <ListItem 
          key={names.id}
          id={names.id}
          student_name={names.name}
          onRemove={handleRemove}
      /> 
    })}
    </div>
  )
}

export default Ravenclaw;