import React from "react";
import ListItem from "./ListItem";

function Ravenclaw({id, name}){

  console.log("(R) Students: ", name)
  const displayStudents = name.map((names, id) => {
    return <ListItem 
      key={id}
      s_name={names}
    />
    }
  )

  return(
    <div>
      <header>
      Ravenclaw Students
      </header>
      {displayStudents}
    </div>
  )
}

export default Ravenclaw;