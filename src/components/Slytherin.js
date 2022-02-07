import React, { useState, useEffect } from "react";
import ListHouse from "./ListHouse";

function Slytherin(){
  let [students, setStudents] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:9292/houses/4")
    .then((r)=> r.json())
      .then((sly_list)=>setStudents(sly_list))
  },[]);
  const displayStu = students.filter((student)=>{
    return student.name
  })
  //console.log("(Sly) Students: ", students)
  return(
    <div>
      <header>
        Slytherin Students

      </header>
      {displayStu.map((name) =>{
        return <ListHouse
          key={name.id}
          id={name.id}
          house={name.name}
      /> 
    })}
     
    </div>
   
  )
}

export default Slytherin;