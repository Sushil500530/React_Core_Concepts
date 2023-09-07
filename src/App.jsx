import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const [count, setCount] = useState(0);

  const actors = ['Sakib','Bappa Raj','Jasim','Rubel'] ;
  const singers = [
    {id: 1, name:'Dr.Mahfuzar Rahman', age: 68},
    {id: 2, name:'Eva Rahman', age: 38},
    {id: 3, name:'Shuvo', age: 58},
    {id: 4, name:'Pritom ', age: 28},
  ]
  return (
    <>
      <h1>Vite + React</h1>

    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }


      <Actor name ={"Sushil"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name = 'Laptop' price ='22k'></Device>
      <Device name = 'Mobile' price ='12k'></Device>
      <Device name = 'Watch' price='300'></Device>
     <Person></Person>
     <Student grade = "7" score ="99"></Student>
     <Student grade={10} score={110}></Student>
     <Student></Student>
     <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props)
  return (
    <h2>
      This device is: {props.name} price: {props.price}
    </h2>
  );
}
function Person() {
  const age = 23;
  const money = 90;
  const person = { name: "sushil", age: 20 };
  return (
    <h3>
      I am a {person.name}, with age:{age + money}
    </h3>
  );
}
const { grade, score } = { grade: "7", score: "99" };

function Student({ grade = 5, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>class: {grade}</p>
      <p>score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "1px solid tomato",
    borderRadius: "5px",
  };
  return (
    <div style={developerStyle}>
      <h4>Devo devo</h4>
      <p>Coding:</p>
    </div>
  );
}
export default App;
