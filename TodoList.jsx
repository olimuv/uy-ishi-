import {useState} from "react";
export default function TodoList() {
  const [task,S]=useState("");
  const [list,L]=useState([]);
  return <div>
    <input value={task} onChange={e=>S(e.target.value)}/>
    <button onClick={()=>{if(task.trim()){L([...list,{id:Date.now(),text:task,done:false}]);S("");}}}>Add</button>
    <p>Jami: {list.length} | Bajarilgan: {list.filter(x=>x.done).length}</p>
    {list.map(x=><p key={x.id}>
      <input type="checkbox" checked={x.done} onChange={()=>L(list.map(t=>t.id===x.id?{...t,done:!t.done}:t))}/>
      {x.text}
      <button onClick={()=>L(list.filter(t=>t.id!==x.id))}>Delete</button>
    </p>)}
  </div>;
}