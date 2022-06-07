import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import {
  setDoc,
  getDocs,
  collection,
  addDoc,
  orderBy,
  doc,
  arrayUnion,
  updateDoc,
  onSnapshot
} from "firebase/firestore";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

function App() {
  const [msg, setMsg] = useState({});
  const [viewMsg, setViewMsg] = useState([]);

  const msgStore = {};

  const sendMsg = async () => {
    await updateDoc(doc(db, "msgStore","messages","sandesh","suchana"), {
      msgArray:arrayUnion(msg)
    },{merge:true})
      .then(console.log("Send Successfully"))
      .catch((error) => {
        alert(error.message);
      });
  };

  const fetch = async () => {

 onSnapshot(doc(db, "msgStore","messages","sandesh","suchana"),(parameter)=>(setViewMsg(parameter.data())));
console.log(viewMsg);  
    // console.log(data.docs);
    // setViewMsg(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
  };


  const handleChange=(e)=>{
    setMsg({...msg, message:e.target.value})
    sendMsg()
  }

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="h-[500px] w-[500px] border-2 relative  ">
        <div className="p-10 w-full h-full gap-3 overflow-scroll">
          {
              viewMsg?.msgArray?.map((elem)=>
            (  <span >
              {elem.message}
              </span>)
            )
          }
         
        </div>

        <div className="border-2  absolute bottom-0 w-full flex">
          {" "}
          <input
            type="text"
            className="w-full outline-none py-2 px-2"
            placeholder="Enter Message.."
            onChange={(e) => handleChange(e)}
          />
          <button
            className="bg-slate-400 px-7 py-2 "
            onClick={(e) => sendMsg()}
          >
            Send
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
