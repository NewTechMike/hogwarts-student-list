import React, { useState, useEffect } from "react";
import ListHouse from "./ListHouse";

function Ravenclaw(){
  let [students, setStudents] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:9292/houses/2")
    .then((r)=> r.json())
      .then((raven_list)=>setStudents(raven_list))
  },[]);
  const displayStu = students.filter((student)=>{
    return student.name
  })
  //console.log("(Raven) Students: ", students)
  return(
    <div>
      <header>
      Ravenclaw Students
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

export default Ravenclaw;