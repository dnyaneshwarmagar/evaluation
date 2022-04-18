import { useEffect, useState } from "react";
import "./ShowStudents.css";

export const ShowStudents = () => {
  const [studentData,setStudentData] = useState([]);

  const [sortby,setSortby]=useState(null)
  const [order,setOrder]=useState("asc")
  
  
  useEffect( ()=>{
   getData()
  
  },[order])
  
  const handleChange=(e)=>{
  
    const {name,value}=e.target
  
    setSortby({...sortby,[name]:value})
  
  }
  
  const sortbyChange=(e)=>{
    const [name,value]=e.target
  
    setOrder({...order,[name]:value})
  }
  
  
  
  const sorting=()=>{
 
    if(order==="asc"){
    const sorted=[...studentData].sort((a,b)=>
    (a[sortby].toLowerCase() > b[sortby].toLowerCase() ? 1:-1)  )
    setStudentData(sorted)
  }
  else if(order==="desc")
  {
    const sorted=[...studentData].sort((a,b)=>
    (a[sortby].toLowerCase() < b[sortby].toLowerCase() ? 1:-1) )
    setStudentData(sorted)
  }
  
  }
  
  






  const getData = async () =>{
    const data = await fetch("http://localhost:8080/students").then(d=>d.json());
    setStudentData(data)
  }
  useEffect(()=>{
    getData()
  },[])

  if(studentData){
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            name="sortby"
            onChange={handleChange}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            name="sortorder"
            onChange={sortbyChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={sorting}>sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {studentData.map((el)=>(
            <tr className="row">
            <td className="first_name">{el.first_name}</td>
            <td className="last_name">{el.last_name}</td>
            <td className="email">{el.email}</td>
            <td className="gender">{el.gender}</td>
            <td className="age">{el.age}</td>
            <td className="tenth_score">{el.tenth_score}</td>
            <td className="twelth_score">{el.twelth_score}</td>
            <td className="preferred_branch">{el.v}</td>
          </tr>
          )
          )          
          }
        </tbody>
      </table>
    </div>
  );
};
}
