import React,{useState,useEffect,useReducer} from 'react'
import UserHOC from './UserHOC'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { userReducer } from './userReducer';

function UserForm() {
    let [obj, setObj] = useState({hobbies:[]});
    const Navigate = useNavigate()
    const params = useParams()
    const [state, dispatch] = useReducer(userReducer, [])

    useEffect(() => {
        if(params.id){
            axios.get("https://student-api.mycodelibraries.com/api/user/get-user-by-id?id="+params.id).then((res)=>{
                obj=res.data.data
                obj.hobbies=obj.hobbies.split(",")
                setObj({...obj})
            })
        } 
    }, []);

    const getData=(e)=>{
        if(e.target.name === 'hobbies'){
          if(e.target.checked){
            obj.hobbies.push(e.target.value)
          }else{
            obj.hobbies= obj.hobbies.filter((x)=>x !== e.target.value)
          }
        }else if(e.target.name ===  'profile'){
            const image = e.target.files[0]
            obj.image = image
        }
        else{
          obj[e.target.name]=e.target.value
        }
        console.log(obj);
        setObj({...obj})
      }

      const saveData=()=>{
        const formdata = new FormData()
        formdata.append("firstName",obj.firstName)
        formdata.append("lastName",obj.lastName )
        formdata.append("age",obj.age)
        formdata.append("hobbies",obj.hobbies )
        formdata.append("gender",obj.gender)
        formdata.append("city",obj.city)
        formdata.append("userImage",obj.image)
        if(obj._id === undefined){
         dispatch({type:"ADDUSER",obj:formdata})
         setTimeout(() => {
           Navigate('/table')
          
         }, 1000);
        }else{
          obj.id = obj._id
          formdata.append("id",obj.id)
          dispatch({type:"EDITUSER",obj:formdata})
          setTimeout(() => {
            Navigate('/table')
           
          }, 1000);
        }
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
        <input type="file" name='profile' onChange={getData} /> <br />
        <button className="btn btn-success" type="button" onClick={saveData}>Save</button>
      </form>
    </div>
  )
}

export default UserHOC(UserForm)
