import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import '../App.css';
import Students from './Students';
import Home from './Home';
import Gryffindor from './Gryffindor';
import Ravenclaw from './Ravenclaw';
import Hufflepuff from './Hufflepuff';
import Slytherin from './Slytherin';

function App() {

  const [students, setStudents] = useState([]);
  const [gryffStudents, setGryffStudents] = useState ([]);
  const [ravenStudents, setRavenStudents] = useState ([]);
  const [huffStudents, setHuffStudents] = useState ([]);
  const [slyStudents, setSlyStudents] = useState ([]);
  
  
  /**** All Students */
  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then((r) => r.json())
    .then((student) => setStudents(student))
  }, []);
  const student_id = students.map((student) => {
    return student.id
  })
  const student_name = students.map((student) => {
    return student.name
  })
 /******** */
  
  
  /**** Gryffindor Students */
  useEffect(() => {
    fetch("http://localhost:9292/gryffindor")
    .then((r) => r.json())
    .then((student) => setGryffStudents(student))
  }, []);
  //console.log("(A)Gryff Students: ", gryffStudents)
  const gryff_student_id = gryffStudents.map((student) => {
    return student.id
  })
  const gryff_student_name = gryffStudents.map((student) => {
    return student.name
  })
  /******** */


  /**** Ravenclaw Students */
  useEffect(() => {
    fetch("http://localhost:9292/ravenclaw")
    .then((r) => r.json())
    .then((student) => setRavenStudents(student))
  }, []);
  //console.log("(A)Raven Students: ", ravenStudents)
  const raven_student_id = ravenStudents.map((student) => {
    return student.id
  })
  const raven_student_name = ravenStudents.map((student) => {
    return student.name
  })
  /******** */
  
  
  /**** Hufflepuff Students */
  useEffect(() => {
    fetch("http://localhost:9292/hufflepuff")
    .then((r) => r.json())
    .then((student) => setHuffStudents(student))
  }, []);
  //console.log("(A)Huff Students: ", huffStudents)
  const huff_student_id = huffStudents.map((student) => {
    return student.id
  })
  const huff_student_name = huffStudents.map((student) => {
    return student.name
  })
  /******** */
  
  
  /**** Slytherin Students */
  useEffect(() => {
    fetch("http://localhost:9292/slytherin")
    .then((r) => r.json())
    .then((student) => setSlyStudents(student))
  }, []);
  //console.log("(A)Sly Students: ", slyStudents)
  const sly_student_id = slyStudents.map((student) => {
    return student.id
  })
  const sly_student_name = slyStudents.map((student) => {
    return student.name
  })
  /******** */



  console.log("(A)Student names: ", student_name)
  //console.log(students)

  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/students'>
            <Students id={student_id} name={student_name} />
          </Route>
          <Route path='/gryffindor'>
            <Gryffindor id={gryff_student_id} name={gryff_student_name} />
          </Route>
          <Route path='/ravenclaw'>
            <Ravenclaw id={raven_student_id} name={raven_student_name} />
          </Route>
          <Route path='/hufflepuff'>
            <Hufflepuff id={huff_student_id} name={huff_student_name} />
          </Route>
          <Route path='/slytherin'>
            <Slytherin id={sly_student_id} name={sly_student_name} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
