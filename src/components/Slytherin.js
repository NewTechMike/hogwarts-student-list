import React from "react";
import ListItem from "./ListItem";

function Slytherin({id, names, handleRemove}){
  const displayNames = names.filter((name)=>{
    return name.name
  })
  console.log("(Sly) Students: ", names)
  console.log("(Sly)Display Students: ", displayNames)

  return(
    <div>
      <header>
        Slytherin Students
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

export default Slytherin;