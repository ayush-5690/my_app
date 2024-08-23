import axios from "axios";


const getApi =async()=>{
  return await axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res)=>{
        return [...res.data.data]
    })
}

export const userReducer =async(state,action)=>{
    switch (action.type) {
        case "GETUSER":
            return  getApi()

        case "ADDUSER":
           return axios.post("https://student-api.mycodelibraries.com/api/user/add",action.obj).then(async(res)=>{
                return  getApi()
            })
            
        case "DELETEUSER":
           return axios.delete("https://student-api.mycodelibraries.com/api/user/delete?id="+action.id).then(async(res)=>{
                return  getApi()
            })
        case "EDITUSER":
           return axios.post("https://student-api.mycodelibraries.com/api/user/update",action.obj).then(async(res)=>{
                return  getApi()
            })
    
        default:
            return state;
    }
}