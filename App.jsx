import Counter from "./components/Counter";
import Password from "./components/Password";
import TodoList from "./components/TodoList";
import AutoFocus from "./components/AutoFocus";
import CharacterCounter from "./components/CharacterCounter";
import PreviousValue from "./components/PreviousValue";
import DigitalClock from "./components/DigitalClock";
import DocumentTitle from "./components/DocumentTitle";
import RandomColor from "./components/RandomColor";
import StudentManagement from "./components/StudentManagement";
import "./App.css";

const tasks = [
  ["Counter App",Counter],
  ["Password",Password],
  ["Todo List",TodoList],
  ["Auto Focus",AutoFocus],
  ["Character Counter",CharacterCounter],
  ["Previous Value",PreviousValue],
  ["Digital Clock",DigitalClock],
  ["Document Title",DocumentTitle],
  ["Random Color",RandomColor],
  ["Student Management",StudentManagement]
];

export default function App() {
  return <main className="app">
    <h1>React Hooks Homework</h1>
    <p>useState • useRef • useEffect</p>
    {tasks.map(([name,Component],i)=>
      <section className="card" key={name}>
        <h2>{i+1}. {name}</h2>
        <Component/>
      </section>
    )}
  </main>;
}