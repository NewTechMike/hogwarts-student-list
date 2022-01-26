import React from "react";
import ListItem from "./ListItem";
import NewStudent from './NewStudent';

function Students({id, name, year}){
  //Question:
  //How do I pass "year" into ListItem to display
  // the year at school for each student
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
      <NewStudent />
      {displayStudents}
      
    </div>
  )
}

export default Students;