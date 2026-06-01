import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from "../../config/firebase.js"
import { signOut } from 'firebase/auth'
function Navbar() {
  useEffect(()=>{
auth.onAuthStateChanged( (user)=>{
if(user) setLogIn(true);
else setLogIn(false)
})
  },[])
  const [loggedIn, setLogIn] = useState(false)
    const navigate = useNavigate()
function logout(){
  signOut(auth)
  navigate("/login")
}
    
  return (
    <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex items-center'>
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5'>About</Link>
            {loggedIn ? <button className='button-style hidden md:block' onClick={logout}>Logout</button>:<button className='button-style hidden md:block' onClick={()=>navigate("/login")}>Login</button>  }
            {/* <button className='button-style hidden md:block' onClick={()=>navigate("/login")}>{loggedIn ? 'Logout':'Login'  }</button> */}
        </div>
    </div>
  )
}

export default Navbar