import {useState,useEffect} from "react";
export default function DocumentTitle() {
  const [n,S]=useState(0);
  useEffect(()=>{document.title=`Count: ${n}`;},[n]);
  return <div><h2>{n}</h2><button onClick={()=>S(n+1)}>+</button></div>;
}