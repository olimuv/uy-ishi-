import {useState,useRef,useEffect} from "react";
export default function PreviousValue() {
  const [v,S]=useState("");
  const old=useRef("");
  const previous=old.current;
  useEffect(()=>{old.current=v;},[v]);
  return <div>
    <input value={v} onChange={e=>S(e.target.value)}/>
    <p>Hozirgi: {v}</p>
    <p>Oldingi: {previous}</p>
  </div>;
}