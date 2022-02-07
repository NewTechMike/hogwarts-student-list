import React, { useState, useEffect } from "react";
import ListHouse from "./ListHouse";

function Gryffindor(){
  let [students, setStudents] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:9292/houses/1")
    .then((r)=> r.json())
      .then((gryff_list)=>setStudents(gryff_list))
  },[]);
  const displayStu = students.filter((student)=>{
    return student.name
  })
  //console.log("(Sly) Students: ", students)

  return(
    <div>
      <header>
        Gryffindor Students
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

export default Gryffindor;