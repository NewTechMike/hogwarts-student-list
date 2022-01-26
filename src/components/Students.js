import React from "react";
import ListItem from "./ListItem";

function Students({id, name}){
  
  console.log("(S)Student names: ", name)
  //console.log("(S)Student id: ", id)

  const displayStudents = name.map((names, id) => {
    return <ListItem 
      key={id}
      id={id+1}
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