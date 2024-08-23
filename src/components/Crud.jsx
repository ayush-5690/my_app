import React, { useState,useEffect } from "react";
import validateJson from "./validateFormJson.json"
import { imgClose, imgOpen } from "../imageService";
import { IoMdClose } from "react-icons/io";

function Crud() {
  const [obj, setObj] = useState({ hobbies: [],name:'',email:'',password:'',confirmpassword:'',date:'',number:'',gender:'',profile:'' });
  const [aray, setAray] = useState(
     []
  );
  const [filteraray, setfilteraray] = useState(
     []
  );
  let [hobbies, setHobbies] = useState([]);
  let [id, setId] = useState( 0);
  const [blankObj, setBlankObj] = useState({ hobbies: [] });
  const [errMsg, setErrMsg] = useState({});
  const [filterObj, setFilterObj] = useState({name:'',email:''});
  let currentDate = new Date()
  let above18 = currentDate.setFullYear(currentDate.getFullYear()-18)

useEffect(()=>{
  const newray = JSON.parse(localStorage.getItem("aray"))
  const newId = JSON.parse(localStorage.getItem("id"))
  if(newray && newId){
    setAray([...newray])
    setId(newId)
  }
 
},[])

useEffect(()=>{
  localStorage.setItem("id", JSON.stringify(id));
  localStorage.setItem("aray", JSON.stringify(aray));
},[id,aray])

  const getData = async (e) => {
    // console.log(e.target);

    if (e.target.name === "hobbies") {
      if (e.target.checked) {
        hobbies.push(e.target.value);
        setHobbies([...hobbies]);
        // obj[e.target.name]=hobbies
        // obj.hobbies.push(e.target.value)
        console.log(hobbies);
      } else {
        console.log("unchecked", hobbies, e.target.value);
        // console.log(obj.hobbies);
        hobbies = hobbies.filter((x) => {
          if (x !== e.target.value) {
            return x;
          }
        });
        setHobbies([...hobbies]);
        // let a=obj.hobbies.filter((x)=>x !== e.target.value)
        // obj.hobbies=a
        console.log(hobbies);
        // console.log(a);
      }
      console.log(obj.hobbies);
      obj[e.target.name] = hobbies;
      blankObj[e.target.name] = [];
    } else if (e.target.name === "profile") {
      console.log(e.target.files[0]);
      obj[e.target.name] = await toBase64(e.target.files[0]);
      blankObj[e.target.name] = "";
    } else {
      obj[e.target.name] = e.target.value;
      blankObj[e.target.name] = "";
    }
     
    validate(e.target.name)
    setErrMsg({ ...errMsg });
    console.log(blankObj);
    setBlankObj({ ...blankObj });
    // setObj({...obj})
  };
  let msg;
  const validate =(name)=>{
    const jsonObj = validateJson?.find((x)=>x.name == name)
    const checkcondition = jsonObj?.conditions.find((x)=>eval(x.condition))
    console.log(checkcondition);
    if(checkcondition){
      if(checkcondition?.otherfield){
        errMsg[checkcondition?.otherfield]=checkcondition.error
      }else{
        errMsg[jsonObj?.name]=checkcondition.error
      }
    }else{
      delete errMsg[jsonObj?.name]
    }
  }
  const saveData = () => {
    for (let key in obj){
      validate(key)
    }
    setErrMsg({});
   
    setErrMsg({ ...errMsg });
    console.log(Object.values(errMsg));
    if(Object.values(errMsg).every((x)=> x === '')){
      if (obj.id === undefined) {
        id++;
        obj.id = id;
       
        setId(id);
        setObj({ ...obj });
        console.log(obj);
        aray.push(obj);
        filteraray.push(obj)
        setfilteraray([...filteraray])
        console.log(filteraray);
      } else {
        const index = aray.findIndex((x) => x.id === obj.id);
        console.log(index);
        aray.splice(index, 1, obj);
      }
     
      setAray([...aray]);

      setObj({ ...blankObj });
      setHobbies([]);
    }

    console.log(aray);
  };
  const editData = (id) => {
    const editObj = aray.find((x) => x.id === id);
    console.log(editObj);
    setObj({ ...editObj });
  };
  const deleteData = (id) => {
    console.log(id);
    const deleteAray = aray.filter((x) => x.id !== id);
    setAray([...deleteAray]);
    localStorage.setItem("aray", JSON.stringify(aray));
  };
  const getFilterData = (e)=>{
    filterObj[e.target.name]=e.target.value
    setFilterObj({...filterObj})
    console.log(filterObj);

    let newAray=(filteraray.filter((x)=>x.name.includes(filterObj.name) && x.email.includes(filterObj.email)));
    setAray([...newAray])
    if(filterObj.name === '' && filterObj.email === ''){
      setAray([...filteraray])
    }
  }
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <div>
      {/* <input
          type="text"
          name="name"
          placeholder="name"
          className="mx-3"
          onChange={getFilterData}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          className=" mx-3"
          onChange={getFilterData}
        /> */}
      <form action="" className="w-50 mx-auto p-2 shadow-lg">
        <label htmlFor="" className="d-block">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-100"
          onChange={getData}
          value={obj.name}
        />
        <span className="text-danger">{errMsg.name}</span>
        <label htmlFor="" className="d-block">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={obj.email}
          onChange={getData}
          className="w-100"
        />
        <span className="text-danger">{errMsg.email}</span>
        <label htmlFor="" className="d-block">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={obj.date}
          onChange={getData}
          className="w-100"
        />
        <span className="text-danger">{errMsg.date}</span>
        <label htmlFor="" className="d-block">
          Phone no.
        </label>
        <input
          type="number"
          name="number"
          value={obj.number}
          onChange={getData}
          className="w-100"
        />
        <span className="text-danger">{errMsg.number}</span>
        <label htmlFor="" className="d-block">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={obj.password}
          className="w-100"
          onChange={getData}
        />
        <span className="text-danger">{errMsg.password}</span>
        <label htmlFor="" className="d-block">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmpassword"
          value={obj.confirmpassword}
          className="w-100"
          onChange={getData}
        />
        <span className="text-danger">{errMsg.confirmpassword}</span>
        <label htmlFor="" className="d-block">
          Gender
        </label>
        <input
          type="radio"
          name="gender"
          className=""
          checked={obj.gender === "male" ? true : false}
          value={"male"}
          onChange={getData}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          className=""
          checked={obj.gender === "female" ? true : false}
          value={"female"}
          onChange={getData}
        />{" "}
        Female <br />
        <span className="text-danger">{errMsg.gender}</span>
        <label htmlFor="" className="d-block">
          Hobbies
        </label>
        <input
          type="checkbox"
          name="hobbies"
          checked={obj.hobbies.includes("Cricket") ? true : false}
          className=""
          value={"Cricket"}
          onChange={getData}
        />{" "}
        Cricket
        <input
          type="checkbox"
          name="hobbies"
          checked={obj.hobbies.includes("Football") ? true : false}
          className=""
          value={"Football"}
          onChange={getData}
        />{" "}
        Football
        <input
          type="checkbox"
          name="hobbies"
          checked={obj.hobbies.includes("Basketball") ? true : false}
          className=""
          value={"Basketball"}
          onChange={getData}
        />{" "}
        Basketball
        <input
          type="checkbox"
          name="hobbies"
          checked={obj.hobbies.includes("ludo") ? true : false}
          className=""
          value={"ludo"}
          onChange={getData}
        />{" "}
        ludo
        <input
          type="checkbox"
          name="hobbies"
          checked={obj.hobbies.includes("baseball") ? true : false}
          className=""
          value={"baseball"}
          onChange={getData}
        />{" "}
        baseball <br />
        <span className="text-danger">{errMsg.hobbies}</span>
        <label htmlFor="" className="d-block">
          Profile
        </label>
        <input
          type="file"
          name="profile"
          className="w-100"
          onChange={getData}
        />
        <span className="text-danger">{errMsg.profile}</span>
        <br />
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={saveData}
        >
          Save
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>number</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {aray?.map((x, i) => {
            return (
              <tr key={i}>
                <td>{x.id}</td>
                <td>
                  <img src={x.profile} width={50} height={50} alt="" onClick={()=>imgOpen(x.profile)}/>
                </td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.date}</td>
                <td>{x.number}</td>
                <td>{x.password}</td>
                <td>{x.gender}</td>
                <td>{x.hobbies.join(",")}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => editData(x.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(x.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="imgouter">
        <div className="imginner">
        <IoMdClose color="red" size={30} className="position-fixed top-0 end-0" onClick={imgClose}/>
        </div>
      </div>
    </div>
  );
}

export default Crud;
