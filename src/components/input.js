import React, { useState } from "react";
import "./Input.css";
 import { useDispatch } from "react-redux";
 import {saveTodo }from "../features/todosection";
const Input=()=>{
    const [input,setinput]=useState('')
    const dispatch = useDispatch()
    const addtodo=()=>{
        dispatch(saveTodo({
           item: input,
           done:false,
           id:Date.now()
        }))
        setinput("")
    }
    return (
        <div className="input">
        <input type="text" value={input} onChange={e=>setinput(e.target.value)} placeholder="add new item in list"/>
        <button onClick={addtodo}>Add</button>
        </div>
       
    )
}
export default Input;