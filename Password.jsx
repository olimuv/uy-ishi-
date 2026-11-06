import {useState} from "react";
export default function Password() {
  const [p,S] = useState("");
  const [show,T] = useState(false);
  return <div>
    <input type={show?"text":"password"} value={p}
      onChange={e=>S(e.target.value)} placeholder="Password"/>
    <button onClick={()=>T(!show)}>{show?"Hide":"Show"}</button>
  </div>;
}