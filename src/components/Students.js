import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import NewStudent from './NewStudent';

function Students({names, handleRemove, handleAddNew}){
  //console.log("(St) Students: ", names)

  const displayNames = names.filter((student)=>{
    return student.name
  })
  return(
    <div>
      <header>
        Currently Enrolled Students
      </header>
      <NewStudent onAddNewStudent={handleAddNew}/>
      {displayNames.map((name) =>{
        return <ListItem 
          key={name.id}
          id={name.id}
          student_name={name.name}
          onRemove={handleRemove}
      />  })}
    


    </div>
  )
}

export default Students;