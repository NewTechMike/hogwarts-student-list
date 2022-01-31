import React from "react";
import ListItem from "./ListItem";

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

export default Hufflepuff;