import React, { useState, useEffect } from "react";

function FetchApi() {
  const [aray, setAray] = useState([]);
  const [obj, setObj] = useState({ hobbies: [] });
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      let res = await fetch(
        "https://student-api.mycodelibraries.com/api/student/get",{
            method:"GET"
        }
      );
      res = await res.json();
      console.log(res);
      setAray([...res.data])
    } catch (error) {
      console.log(error);
    }
  };

  const getData = (e) => {
    if (e.target.name === "hobbies") {
      if (e.target.checked) {
        obj.hobbies.push(e.target.value);
      } else {
        obj.hobbies = obj.hobbies.filter((x) => x !== e.target.value);
      }
    } else {
      obj[e.target.name] = e.target.value;
    }
    console.log(obj);
    setObj({ ...obj });
  };
  const saveData = async() => {
    if (obj._id === undefined) {
       const res= await fetch("https://student-api.mycodelibraries.com/api/student/add",{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
       })
       const resJson = await res.json()
       getApi();
       
    } else {
      obj.id = obj._id;
      const res= await fetch("https://student-api.mycodelibraries.com/api/student/update",{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
       })
       const resJson = await res.json()
       getApi()
    }
  };
  const deleteData = async(id) => {
    await fetch('https://student-api.mycodelibraries.com/api/student/delete?id='+id,{
        method:"DELETE"
    }).then(async(res)=>{
        console.log(await res.json());
        getApi()
    }).catch((er)=>{
        console.log(er);
        
  })
  };
  const editData = async(id) => {
    try {
        let res = await fetch(
          "https://student-api.mycodelibraries.com/api/student/get-student-by-id?id="+id,{
              method:"GET"
          }
        );
        res = await res.json();
        console.log(res);
        setObj({...res.data})
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <div>
      <form action="" className="w-50 mx-auto">
        <label htmlFor="" className="d-block">
          firstname
        </label>
        <input
          type="text"
          className="w-100"
          name="firstName"
          value={obj.firstName}
          onChange={getData}
        />
        <label htmlFor="" className="d-block">
          lastName
        </label>
        <input
          type="text"
          className="w-100"
          name="lastName"
          value={obj.lastName}
          onChange={getData}
        />
        <label htmlFor="" className="d-block">
          age
        </label>
        <input
          type="number"
          className="w-100"
          value={obj.age}
          name="age"
          onChange={getData}
        />
        <label htmlFor="" className="d-block">
          city
        </label>
        <input
          type="text"
          className="w-100"
          value={obj.city}
          name="city"
          onChange={getData}
        />
        <label htmlFor="" className="d-block">
          gender
        </label>
        <input
          type="radio"
          name="gender"
          onChange={getData}
          value={"male"}
          checked={obj.gender === "male"}
        />
        male
        <input
          type="radio"
          name="gender"
          onChange={getData}
          value={"female"}
          checked={obj.gender === "female"}
        />
        female
        <label htmlFor="" className="d-block">
          hobbies
        </label>
        <input
          type="checkbox"
          name="hobbies"
          onChange={getData}
          value={"cricket"}
          checked={obj.hobbies.includes("cricket")}
        />
        cricket
        <input
          type="checkbox"
          checked={obj.hobbies.includes("football")}
          name="hobbies"
          onChange={getData}
          value={"football"}
        />
        football
        <input
          type="checkbox"
          checked={obj.hobbies.includes("baseball")}
          name="hobbies"
          onChange={getData}
          value={"baseball"}
        />
        baseball <br />
        <button className="btn btn-success" type="button" onClick={saveData}>
          Save
        </button>
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
                  <button
                    className="btn btn-warning"
                    onClick={() => editData(x._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(x._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FetchApi;
