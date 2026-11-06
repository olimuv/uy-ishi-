import {useRef,useEffect} from "react";
export default function AutoFocus() {
  const r=useRef(null);
  useEffect(()=>r.current.focus(),[]);
  return <div><input ref={r}/><button onClick={()=>r.current.focus()}>Focus</button></div>;
}