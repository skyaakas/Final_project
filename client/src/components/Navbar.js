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
    <div className='overflow-hidden text-ellipsis flex'>
            <button onClick={()=>{history.push('/')}}>Home</button>
            <button>News</button>
            {/* <button onClick={()=>{history.push('/login')}}>Login</button> */}
            {/* <button onClick={()=>{history.push('/signup')}}>Signup</button> */}
            {authenticated===true ? (<div><button onClick={handleLogOut}>Logout</button>
            <img
             src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              class="rounded-full w-10 h-10 shadow-lg fixed right-10"
              alt="Avatar"
/></div>) : (<div><button onClick={()=>{history.push('/login')}}>Login</button>
            <button onClick={()=>{history.push('/signup')}}>Signup</button>
            
            </div>)}
            
            </div>
  )
}

export default Navbar