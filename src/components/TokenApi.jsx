import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function TokenApi() {
  const [aray, setAray] = useState([]);
  const [obj, setObj] = useState({});

  const authToken = {
    headers: {
      Authorization:
        "Bearer 264f94bf3edc6a16b28f796213df1e6d89ed0243ab52a0ecceb96478f94c80fd",
    },
  };

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios.get("https://gorest.co.in/public/v2/users", authToken).then((res) => {
      console.log(res.data);
      setAray([...res.data]);
    });
  };

  const getData = (e) => {
    obj[e.target.name] = e.target.value;
    setObj({ ...obj });
  };
  const saveData = () => {
    Swal.fire({
      title: "Do you want to save?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (obj.id === undefined) {
          axios
            .post("https://gorest.co.in/public/v2/users", obj, authToken)
            .then((res) => {
              console.log(res);
              getApi();
              Swal.fire("Saved!", "", "success");
            }).catch((err)=>{
              console.log(err.response.data[0].message);
              Swal.fire({
                title: "Something is mising",
                text: err.response.data[0].message,
                icon: "error"
              });
            });
        } else {
          axios
            .put("https://gorest.co.in/public/v2/users/" + obj.id, obj, authToken)
            .then((res) => {
              getApi();
            });
        }
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    
  };
  const editData = (id) => {
    axios
      .get("https://gorest.co.in/public/v2/users/" + id, authToken)
      .then((res) => {
        console.log(res.data);
        setObj({ ...res.data });
      });
  };
  const deleteData = (id) => {
    axios
      .delete("https://gorest.co.in/public/v2/users/" + id, authToken)
      .then((res) => {
        console.log(res.data);
        getApi();
      });
  };
  return (
    <div>
      <form action="" className="w-50 mx-auto">
        <label htmlFor="" className="d-block">
          name
        </label>
        <input
          type="text"
          className="w-100"
          name="name"
          value={obj.name}
          onChange={getData}
        />
        <label htmlFor="" className="d-block">
          email
        </label>
        <input
          type="text"
          className="w-100"
          name="email"
          value={obj.email}
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
          status
        </label>
        <input
          type="text"
          className="w-100"
          name="status"
          value={obj.status}
          onChange={getData}
        />
        <br />
        <button className="btn btn-success" type="button" onClick={saveData}>
          Save
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>gender</th>
            <th>status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {aray.map((x) => {
            return (
              <tr key={x.id}>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.gender}</td>
                <td>{x.status}</td>
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
    </div>
  );
}

export default TokenApi;
