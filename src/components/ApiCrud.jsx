import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiCrud() {
  const [aray, setAray] = useState([]);
  const [obj, setObj] = useState({hobbies:[]});
  useEffect(() => {
   getApi()
  }, []);

  const getApi =()=>{
    axios
    .get("https://student-api.mycodelibraries.com/api/student/get")
    .then((res) => {
      // console.log(res.data.data);
      setAray([...res.data.data]);
    }).catch((err)=>{
      console.log(err);
      alert(err.message)
    })
  }

  const getData=(e)=>{
    if(e.target.name === 'hobbies'){
      if(e.target.checked){
        obj.hobbies.push(e.target.value)
      }else{
        obj.hobbies= obj.hobbies.filter((x)=>x !== e.target.value)
      }
    }else{
      obj[e.target.name]=e.target.value
    }
    console.log(obj);
    setObj({...obj})
  }
  const saveData=()=>{
    if(obj._id === undefined){
      axios.post("https://student-api.mycodelibraries.com/api/student/add",obj).then((res)=>{
        console.log(res.data);
        getApi()
      })
    }else{
      obj.id = obj._id
      axios.post("https://student-api.mycodelibraries.com/api/student/update",obj).then((res)=>{
        console.log(res.data);
        getApi()
      })
    }
  }
  const deleteData=(id)=>{
    axios.delete("https://student-api.mycodelibraries.com/api/student/delete?id="+id).then((res)=>{
      console.log(res.data);
      getApi()
    }).catch((err)=>{
      console.log(err);
      alert(err.message)
    })
  }
  const editData=(id)=>{
    axios.get("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id="+id).then((res)=>{
      console.log(res.data.data);
      setObj({...res.data.data})
    })
  }
  return (
    <div>
      <form action="" className="w-50 mx-auto">
        <label htmlFor="" className="d-block">firstname</label>
        <input type="text" className="w-100" name="firstName" value={obj.firstName} onChange={getData}/>
        <label htmlFor="" className="d-block">lastName</label>
        <input type="text" className="w-100" name="lastName" value={obj.lastName} onChange={getData}/>
        <label htmlFor="" className="d-block">age</label>
        <input type="number" className="w-100" value={obj.age} name="age" onChange={getData}/>
        <label htmlFor="" className="d-block">city</label>
        <input type="text" className="w-100" value={obj.city} name="city" onChange={getData}/>
        <label htmlFor="" className="d-block">gender</label>
        <input type="radio"  name="gender" onChange={getData} value={"male"} checked={obj.gender === 'male'}/>male
        <input type="radio"  name="gender" onChange={getData} value={"female"} checked={obj.gender === 'female'}/>female
        <label htmlFor="" className="d-block">hobbies</label>
        <input type="checkbox"   name="hobbies" onChange={getData} value={"cricket"} checked={obj.hobbies.includes("cricket")}/>cricket

        <input type="checkbox" checked={obj.hobbies.includes("football")}  name="hobbies" onChange={getData} value={"football"}/>football

        <input type="checkbox" checked={obj.hobbies.includes("baseball")}  name="hobbies" onChange={getData} value={"baseball"}/>baseball <br />
        <button className="btn btn-success" type="button" onClick={saveData}>Save</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>city</th>
            <th>age</th>
            <th>gender</th>
            <th>hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {aray.map((x) => {
            return (
              <tr key={x._id}>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.city}</td>
                <td>{x.age}</td>
                <td>{x.gender}</td>
                <td>{x.hobbies}</td>
                <td>
                  <button className="btn btn-warning" onClick={()=>editData(x._id)}>Edit</button>
                  <button className="btn btn-danger" onClick={()=>deleteData(x._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ApiCrud;
