import React, { useState, useEffect } from "react";
import ListHouse from "./ListHouse";

function Hufflepuff(){
  let [students, setStudents] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:9292/houses/3")
    .then((r)=> r.json())
      .then((huff_list)=>setStudents(huff_list))
  },[]);
  const displayStu = students.filter((student)=>{
    return student.name
  })
  //console.log("(huff) Students: ", students)

  return(
    <div>
      <header>
        Hufflepuff Students
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

export default Hufflepuff;