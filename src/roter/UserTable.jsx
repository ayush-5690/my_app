import React,{useEffect,useReducer,useState} from 'react'
import UserHOC from './UserHOC'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { loaderDisplay } from './loaderFunc';
import { userReducer } from './userReducer';

function UserTable() {
    const navigate= useNavigate()
    const [state, dispatch] = useReducer(userReducer, [])
    const [aray, setaray] = useState([])

    useEffect(() => {
      dispatch({type:"GETUSER"})
    }, []);

    useEffect(() => {
      console.log('dfdfefe');
     getApi()
    }, [state]);
    
    const getApi=async()=>{  
      console.log(await state);
      setaray([...await state])
    }      
    
    
    const deleteData=(id)=>{
      dispatch({type:"DELETEUSER",id:id})
    }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>profile</th>
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
          {aray?.map((x) => {
            return (
              <tr key={x._id}>
                <td>
                    <img src={x.image} width={50} height={50} alt="" />
                </td>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.city}</td>
                <td>{x.age}</td>
                <td>{x.gender}</td>
                <td>{x.hobbies}</td>
                <td>
                 <Link to={`/form/${x._id}`}> <button className="btn btn-warning">Edit</button></Link>
                  <button className="btn btn-danger" onClick={()=>deleteData(x._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserHOC(UserTable)
