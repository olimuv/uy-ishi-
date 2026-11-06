import {useState,useRef,useEffect} from "react";
export default function StudentManagement() {
  const [list,L]=useState(()=>JSON.parse(localStorage.getItem("students")||"[]"));
  const [name,N]=useState("");
  const [surname,S]=useState("");
  const [age,A]=useState("");
  const [search,Q]=useState("");
  const r=useRef(null);

  useEffect(()=>{localStorage.setItem("students",JSON.stringify(list));},[list]);

  function add(e){
    e.preventDefault();
    if(!name.trim()||!surname.trim()||!age||Number(age)<1||Number(age)>120)return;
    L([...list,{id:Date.now(),name,surname,age}]);
    N("");S("");A("");r.current.focus();
  }

  return <div>
    <h3>O'quvchilar: {list.length}</h3>
    <form onSubmit={add}>
      <input ref={r} placeholder="Ism" value={name} onChange={e=>N(e.target.value)}/>
      <input placeholder="Familiya" value={surname} onChange={e=>S(e.target.value)}/>
      <input placeholder="Yosh" type="number" value={age} onChange={e=>A(e.target.value)}/>
      <button>Add Student</button>
    </form>
    <input placeholder="Qidirish" value={search} onChange={e=>Q(e.target.value)}/>
    {list.filter(x=>(x.name+" "+x.surname).toLowerCase().includes(search.toLowerCase())).map(x=>
      <p key={x.id}>{x.name} {x.surname} — {x.age} yosh
        <button onClick={()=>L(list.filter(t=>t.id!==x.id))}>Delete</button>
      </p>
    )}
  </div>;
}