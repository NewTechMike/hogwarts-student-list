import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import ListHouse from "./ListHouse";

function Slytherin({id, names, handleRemove}){
  let [state, setState] = useState([]);
  

  useEffect(()=>{
    fetch("http://localhost:9292/houses/4")
    .then((r)=> r.json())
      .then((test)=>setState(test))
  },[]);
  console.log(state)
  const displayNames = names.filter((name)=>{
    return name.name
  })

  console.log("(Sly) Students: ", names)
  return(
    <div>
      <header>
        Slytherin Students

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

export default Slytherin;