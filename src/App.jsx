import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import logo from "./logo.svg";
import "./App.css";
import MyComp from "./MyComp";
import MyComp1 from "./FuncComp";
import { FuncCom2 } from "./FuncCom2";
import { ClassComp } from "./ClassComp";
import FuncComp from "./FuncComp";
import InlineStyle from "./components/InlineStyle";
import ImageCXomp from "./components/ImageCXomp";
import PeraComp from "./components/PeraComp";
import { useState, createContext } from "react";
import AccordionUsage from "./components/AccordionUsage";
import CardPArent from "./components/CardPArent";
import SassCss from "./components/SassCss";
import OnChangeEvent from "./components/OnChangeEvent";
import Crud from "./components/Crud";
import CondiionalRendering from "./components/CondiionalRendering";
import UseRefExample from "./components/UseRefExample";
import MountingClass from "./lifecycle/MountingClass";
import ClassLifeComp2 from "./lifecycle/ClassLifeComp2";
import UpdatingCycle from "./lifecycle/UpdatingCycle";
import UseEffectHook from "./lifecycle/UseEffectHook";
import ChildToPeradata from "./components/ChildToPeradata";
import Child1 from "./context/Child1";
import Child2 from "./context/Child2";
import UseMemo from "./components/UseMemo";
import PureComponent1 from "./components/PureComponent1";
import ReactMemo from "./components/ReactMemo";
import CallbackPera from "./components/CallbackPera";
import PeraButton from "./components/PeraButton";
import CustomHookexa from "./components/CustomHookexa";
import ArrayObject from "./components/ArrayObject";
import ApiCrud from "./components/ApiCrud";
import TokenApi from "./components/TokenApi";
import FetchApi from "./components/FetchApi";
import Home from "./roter/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./roter/About";
import Contact from "./roter/Contact";
import Contact1 from "./roter/Contact1";
import Contact2 from "./roter/Contact2";
import ContactPera from "./roter/ContactPera";
import NotFound from "./roter/NotFound";
import Login from "./roter/Login";
import UserForm from "./roter/UserForm";
import UserTable from "./roter/UserTable";
import Loader from "./roter/Loader"
import ReducerComp from "./components/ReducerComp";

export const NameContext = createContext();
function App() {
  // const [aray,setAray]= useState(['oscar',333,'ujshsuhd'])
  // const[view,setView]=useState(true)
  const [name, setName] = useState("oscar");
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("login")));
  return (
    <div className="">
      {/* <Crud/> */}
      {/* <ReducerComp/> */}
      {/* <NameContext.Provider value={{isLogin, setIsLogin }}> */}
        {/* <BrowserRouter>
          <Routes>
            {isLogin ? (
              <>
                <Route path="/" element={<Navigate to={"/home"} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />}>
                  <Route path=":id" />
                </Route>
                <Route path="/contact" element={<Contact />}>
                  <Route path="" element={<ContactPera />} />
                  <Route path="contact1" element={<Contact1 />} />
                  <Route path="contact2" element={<Contact2 />} />
                </Route>
              </>
            ) : (
              
             <>
               <Route path="/" element={<Navigate to={"/login"} />} />
               <Route path="/login" element={<Login />} />
             </>
            )}

            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={'/form'}/>}/>
            <Route path="/form" element={<UserForm/>}>
              <Route path=":id"/>
            </Route>
            <Route path="/table" element={<UserTable/>}/>
          </Routes>
        </BrowserRouter>
      {/* </NameContext.Provider> */}
      {/* // <Loader/> */}
    </div>
  );
}

export default App;
