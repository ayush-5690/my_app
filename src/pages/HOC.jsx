import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NameContext } from "../App";

function HOC(Componnet) {
  const NewComponent = (props) => {
    const value = useContext(NameContext);
    console.log(props);
    const navigate = useNavigate()
    const logout=()=>{
      value.setIsLogin(false)
      navigate("/")
      localStorage.setItem("login",false)
  }
    return (
      <>
        <div className="bg-success p-2">
          <div className="d-flex">
            {value.isLogin ? (
              <>
                <div className="p-2 me-1 bg-white link">
                  <NavLink to="/home">Home</NavLink>
                </div>
                <div className="p-2 me-1 bg-white link">
                  <NavLink to="/about/kjhghf">About</NavLink>
                </div>
                <div className="p-2 me-1 bg-white link">
                  <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="p-2 me-1 bg-white link">
                <a href onClick={logout}>Logout</a>
              </div>
              </>
            ) : (
              <div className="p-2 me-1 bg-white link">
                <NavLink to="/login">Login</NavLink>
              </div>
            )}
          </div>
        </div>
        <Componnet />
      </>
    );
  };
  return NewComponent;
}

export default HOC;
