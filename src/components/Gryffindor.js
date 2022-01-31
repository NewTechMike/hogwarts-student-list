import React from "react";
import ListItem from "./ListItem";

function Gryffindor({id, names, handleRemove}){

  const displayNames = names.filter((name)=>{
    return name.name
  })
  console.log("(G) Students id: ", names.id)

  return(
    <div>
      <header>
        Gryffindor Students
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

export default Gryffindor;