import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

function Slytherin({id, names, handleRemove}){
  const [state, setState] = useState([]);
  const [slyStudents, setSlyStudents] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9292/houses/4")
    .then((r)=> r.json())
    .then((sly)=>setState(sly))
},[]);

  const displayNames = names.filter((name)=>{
    return name.name
  })
  console.log(state)
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