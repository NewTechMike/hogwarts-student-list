import React from "react";
import ListItem from "./ListItem";

function Gryffindor({id, name}){

  console.log("(G) Students: ", name)
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
        Gryffindor Students
      </header>
      {displayStudents}
    </div>
  )
}

export default Gryffindor;