import {useState,useEffect} from "react";
export default function RandomColor() {
  const [c,S]=useState("#ffffff");
  useEffect(()=>{
    const old=document.body.style.backgroundColor;
    document.body.style.backgroundColor=c;
    return ()=>{document.body.style.backgroundColor=old;};
  },[c]);
  return <div><h2>{c}</h2><button onClick={()=>S("#"+Math.floor(Math.random()*16777216).toString(16).padStart(6,"0"))}>Generate</button></div>;
}