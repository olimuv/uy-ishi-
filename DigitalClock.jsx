import {useState,useEffect} from "react";
export default function DigitalClock() {
  const [time,S]=useState(new Date());
  useEffect(()=>{
    const id=setInterval(()=>S(new Date()),1000);
    return ()=>clearInterval(id);
  },[]);
  return <h2>{time.toLocaleTimeString()}</h2>;
}