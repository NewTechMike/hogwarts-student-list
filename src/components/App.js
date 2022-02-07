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
  
  function handleRemoveStudent(removedStudent){
    const updatedStudents = students.filter((student) =>
      student.id !== removedStudent
    )
    setStudents(updatedStudents)
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
            <Gryffindor />
          </Route>
          <Route path='/houses/ravenclaw'>
            <Ravenclaw />
          </Route>
          <Route path='/houses/hufflepuff'>
            <Hufflepuff />
          </Route>
          <Route path='/houses/slytherin'>
            <Slytherin />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
