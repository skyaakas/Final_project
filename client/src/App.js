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
import MyListings from "./components/MyListings.js";
import CreateNewRental from "./components/CreateNewRental.js";

function App() {
  const [count, setCount] = useState(0);
  
  const [currentUser, setCurrentUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [rental, setRental] = useState({})
  const [bookings, setBookings] = useState({})
  const[userRentals, setUserRentals] = useState([])
  const [ latitude, setLatitude ] = useState(null);
  const [ longitude, setLongitude ] = useState(null)
  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
 // get the user's geolocation
 useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude);
  })
}, [])


// const  {isLoaded}  = useLoadScript({
//     googleMapsApiKey: "AIzaSyAaoCL-2NIJ8JqckeEtrGLtErNbFpps7vA"
//   });



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
  console.log(currentUser)
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
          <Route path="/list_my_property">
            <CreateNewRental currentUser={currentUser}/>
          </Route>
          <Route path="/myListings">
            <MyListings/>
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
          <Home longitude={longitude} latitude={latitude}/>
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
        </Switch>
        <Foot/>
      </div>
    </BrowserRouter>
  );
}

export default App;