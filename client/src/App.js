import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup.js";
import Navigation from "./components/Navigation.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Rental from "./components/Rental.js";
import RentalDetail from "./components/RentalDetail.js";
import Booking from "./components/Booking.js";
import  "./index.css"
import "./style/Footer.css"
import MyRental from "./components/MyRental.js";
import Foot from "./components/Foot.js";
import UserBooking from "./components/UserBooking.js";

function App() {
  const [count, setCount] = useState(0);
  
  const [currentUser, setCurrentUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [rental, setRental] = useState({})
  const [bookings, setBookings] = useState({})
  const[userRentals, setUserRentals] = useState([])

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
          setUserRentals(user.rentals);
        });
      }
    });
  }, []);
  const allUserRentals = userRentals.map((userRentals)=>{
    return(
        <UserBooking userRentals={userRentals} key={userRentals.id}/>
    )
})
  
  

  return (
    <BrowserRouter>
      <div className="App">
      <Navigation authenticated= {authenticated} setAuthenticated={setAuthenticated} currentUser={currentUser}/>
            
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/rental">
            <Rental/>
          </Route>
          <Route path="/myBookings">
            {allUserRentals}
          </Route>
          <Route path="/bookings">
            <Booking currentUser={currentUser} authenticated={authenticated} rental={rental}/>
          </Route>
          <Route path="/rentals/:id">
            <RentalDetail authenticated={authenticated} rental={rental} setRental={setRental} setBookings={setBookings} bookings={bookings}/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/myrental">
            <MyRental/>
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} setAuthenticated={setAuthenticated}/>
            </Route>
          <Route path="/">
          <Home/>
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
        </Switch>
        <Foot/>
      </div>
    </BrowserRouter>
  );
}

export default App;