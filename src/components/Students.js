import React from "react";
import ListItem from "./ListItem";

function Students({id, name}){
  
  console.log("(S)Student names: ", name)

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
        Currently Enrolled Students
      </header>
      {displayStudents}
    </div>
  )
}

export default Students;