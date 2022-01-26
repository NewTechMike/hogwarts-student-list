import React from "react";
import ListItem from "./ListItem";

function Slytherin({id, name}){

  console.log("(S) Students: ", name)
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
        Slytherin Students
      </header>
      {displayStudents}
    </div>
  )
}

export default Slytherin;