import React from "react";
import ListItem from "./ListItem";
import NewStudent from './NewStudent';

function Students({names, id, handleRemove, handleAddNew}){
  
  const displayNames = names.filter((name)=>{
    return name.name
  })

  return(
    <div>
      <header>
        Currently Enrolled Students
      </header>
      <NewStudent onAddNewStudent={handleAddNew}/>
      {displayNames.map((names) =>{
        return <ListItem 
          key={names.id}
          id={names.id}
          student_name={names.name}
          onRemove={handleRemove}
      />  })}
    


    </div>
  )
}

export default Students;