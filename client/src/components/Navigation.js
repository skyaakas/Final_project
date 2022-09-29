import React from 'react'
import { useHistory } from "react-router";
import { Navbar, Dropdown, Avatar } from 'flowbite-react';

function Navigation({authenticated, setAuthenticated, currentUser}) {
    const history = useHistory();

    const handleLogOut = () =>{
      fetch('/logout',{
        method: "DELETE"
      })
      setAuthenticated(false);
      history.push('/') // redirect user to home page after logging out 
    };
  return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      The Kotha
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        {authenticated===true? (<div><span className="block text-sm">
          {currentUser.username}
        </span>
        <span className="block truncate text-sm font-medium">
          {currentUser.email}
        </span></div>):null}
        
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      {authenticated===true?
      <Dropdown.Item onClick={handleLogOut}>
        Sign out
      </Dropdown.Item> : 
      <Dropdown.Item onClick={()=>{history.push('/login')}}>
      Sign In
    </Dropdown.Item>}
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/rental">
      Rental
    </Navbar.Link>
    {authenticated === true?
    (<Navbar.Link href="/myBookings">
      My Bookings
    </Navbar.Link>): null}
    {authenticated === true?
    (<Navbar.Link href="/list_my_property">
      List My Property
    </Navbar.Link>): null}
    {authenticated === true? 
    null:
       (<Navbar.Link href="/login">
      Login
    </Navbar.Link>) }
    {authenticated === true? 
    null:
    (<Navbar.Link href="/signup">
      Signup
    </Navbar.Link>)}
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation