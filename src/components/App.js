import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import '../App.css';
import Students from './Students';
import Home from './Home';
import Houses from './Houses';

import Gryffindor from './Gryffindor';
import Ravenclaw from './Ravenclaw';
import Hufflepuff from './Hufflepuff';
import Slytherin from './Slytherin';


function App() {

  const [houses, setHouses] = useState([]);
  const [students, setStudents] = useState([]);
  
  const [gryffStudents, setGryffStudents] = useState([]);
  const [ravenStudents, setRavenStudents] = useState([]);
  const [huffStudents, setHuffStudents] = useState([]);
  const [slyStudents, setSlyStudents] = useState([]);
  
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then((r) => r.json())
    .then((student) => setStudents(student))
  }, []);
  const displayStudents = students.filter((student) => {
    return student.name
  })
  const student_id = students.map((student) => {
    return student.id
  })

 useEffect(()=>{
    fetch("http://localhost:9292/houses")
    .then((r)=>r.json())
    .then((house)=>setHouses(house))
 },[]);
 const house_name = houses.map((house) =>{
   return house.name
 })

  useEffect(() => {
      fetch("http://localhost:9292/houses/1")
      .then((r)=> r.json())
      .then((gryff)=>setGryffStudents(gryff))
  },[]);
  const gryff_student_id = gryffStudents.map((student) => {
    return student.id
  })
  const displayGryffStudents = gryffStudents.filter((student) => {
    return student
  })
  

  useEffect(() => {
      fetch("http://localhost:9292/houses/2")
      .then((r)=> r.json())
      .then((raven)=>setRavenStudents(raven))
  },[]);
  const raven_student_id = ravenStudents.map((student) => {
    return student.id
  })
  const displayRavenStudents = ravenStudents.filter((student) => {
    return student
  })

  useEffect(() => {
      fetch("http://localhost:9292/houses/3")
      .then((r)=> r.json())
      .then((huff)=>setHuffStudents(huff))
  },[]);
  const huff_student_id = huffStudents.map((student) => {
    return student.id
  })
  const displayHuffStudents = huffStudents.filter((student) => {
    return student
  })

  useEffect(() => {
      fetch("http://localhost:9292/houses/4")
      .then((r)=> r.json())
      .then((sly)=>setSlyStudents(sly))
  },[]);
  const sly_student_id = slyStudents.map((student) => {
    return student
  })
  console.log("(A)Sly Id: ", sly_student_id)
  console.log("(A)display:  ", displayStudents)
  const displaySlyStudents= slyStudents.filter((student) => {
    return student
  })

  function handleRemoveStudent(removedStudent){
    const updatedStudents = students.filter((student) =>
      student.id !== removedStudent
    )
    setStudents(updatedStudents)
    setSlyStudents([...slyStudents])
  }

  function handleAddNewStudent(newStudent){
    const house = newStudent.house_id
    setStudents([...students, newStudent])
      console.log("(A)NewSthouse: ", house)
    if(house === 1){
      alert("Gryffindor!")
      setGryffStudents([...gryffStudents, newStudent])
    } else if(house === 2){   
      alert("Ravenclaw!") 
      setRavenStudents([...ravenStudents, newStudent])
    } else if(house === 3){
      alert("Hufflepuff!")
      setHuffStudents([...huffStudents, newStudent])
    } else if (house === 4){
      alert("Slytherin!")
      setSlyStudents([...slyStudents, newStudent])
    } 
  }

  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/students'>
            <Students 
              id={student_id}
              names={displayStudents} 
              handleRemove={handleRemoveStudent}
              handleAddNew={handleAddNewStudent}/>
          </Route>
          <Route exact path='/houses'>
            <Houses name={house_name} />
          </Route>
          <Route path='/houses/gryffindor'>
            <Gryffindor 
              id={gryff_student_id} 
              names={displayGryffStudents}
              handleRemove={handleRemoveStudent} 
            />
          </Route>
          <Route path='/houses/ravenclaw'>
            <Ravenclaw 
              id={raven_student_id} 
              names={displayRavenStudents} 
              handleRemove={handleRemoveStudent} 
            />
          </Route>
          <Route path='/houses/hufflepuff'>
            <Hufflepuff 
              id={huff_student_id} 
              names={displayHuffStudents} 
              handleRemove={handleRemoveStudent} 
            />
          </Route>
          <Route path='/houses/slytherin'>
            <Slytherin 
              id={sly_student_id} 
              names={displaySlyStudents}
              handleRemove={handleRemoveStudent} 
            />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
