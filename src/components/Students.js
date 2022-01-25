import React from "react";
import ListItem from "./ListItem";

function Students({student_id, student_name}){
  
  const displayStudents = student_name.map((names, id) => {
    return <ListItem 
      s_id={id}
      s_name={names}
    />
  })

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