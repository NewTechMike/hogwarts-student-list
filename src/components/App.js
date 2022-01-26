import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import '../App.css';
import Students from './Students';
import Home from './Home';

function App() {

  const [students, setStudents] = useState([]);
  const [gryffStudents, setGryffStudents] = useState ([]);
  //Make gryff state above here
  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then((r) => r.json())
    .then((student) => setStudents(student))
  }, []);
  
  // To get the students separated in each house:
  // Copy Students only with the same house ids

  /**** Gryffindor Students */
  useEffect(() => {
    fetch("http://localhost:9292/gryffindor")
    .then((r) => r.json())
    .then((student) => setGryffStudents(student))
  }, []);
  console.log("(A)Gryff Students: ", gryffStudents)
  const gryff_student_id = gryffStudents.map((student) => {
    return student.id
  })
  const gryff_student_name = gryffStudents.map((student) => {
    return student.name
  })
  /******** */


  /**** All Students */
  const student_id = students.map((student) => {
    return student.id
  })
  const student_name = students.map((student) => {
    return student.name
  })
 /******** */

  console.log("(A)Student names: ", student_name)
  console.log(students)

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
        </Switch>
    </div>
  );
}

export default App;
