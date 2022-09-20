import React from 'react'
import "../style/Navbar.css"
import {useHistory} from "react-router"

function Navbar({authenticated, setAuthenticated}) {
    const history = useHistory();

    const handleLogOut = () =>{
      fetch('/logout',{
        method: "DELETE"
      })
      setAuthenticated(false);
      history.push('/login') // redirect user to home page after logging out 
    };
  return (
    <div className="topnav">
            <button onClick={()=>{history.push('/')}}>Home</button>
            <a href="#news">News</a>
            {/* <button onClick={()=>{history.push('/login')}}>Login</button> */}
            {/* <button onClick={()=>{history.push('/signup')}}>Signup</button> */}
            {authenticated===true ? (<button onClick={handleLogOut}>Logout</button>) : (<div><button onClick={()=>{history.push('/login')}}>Login</button>
            <button onClick={()=>{history.push('/signup')}}>Signup</button>
            </div>)}
            </div>
  )
}

export default Navbar