import React from 'react'
import { useState } from 'react'

export const User = ({setLoggedin}) => {
    const[state, setState]=useState("")
    const[email, setEmail]=useState("")

const handleemail=(e)=>{
    setEmail(e.target.value);
}
const handlpassword=(e)=>{
    setState(e.target.value)
}
console.log(state)

    const handlesubmit=()=>{

        if(state==="1234"&& email==="nikkalyan"){
        setLoggedin(true)
        alert("logged in successful")
        }else{
        setLoggedin(false)
        alert("wrong id or password")
        }
        
    }
  return (
    <div>

        <h1>Nikhil</h1>
       
        <input type="email" placeholder='your Email-id' onChange={handleemail} />
        <input type="password"  placeholder='password' onChange={handlpassword} />
        <br />
        <br />
        <br />
        
        <button onClick={handlesubmit}>Login</button>
    </div>
  )
}
