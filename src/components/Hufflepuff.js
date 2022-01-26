import React from "react";
import ListItem from "./ListItem";

function Hufflepuff({id, name}){

  console.log("(H) Students: ", name)
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
        Hufflepuff Students
      </header>
      {displayStudents}
    </div>
  )
}

export default Hufflepuff;