import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup.js";
import Navbar from "./components/Navbar.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import Rental from "./components/Rental.js";
import RentalDetail from "./components/RentalDetail.js";
import  "./index.css"
import "./style/Footer.css"

function App() {
  const [count, setCount] = useState(0);
  
  const [currentUser, setCurrentUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

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
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar authenticated= {authenticated} setAuthenticated={setAuthenticated} currentUser={currentUser}/>
            
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/rental">
            <Rental/>
          </Route>
          <Route path="/rentals/:id">
            <RentalDetail/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} setAuthenticated={setAuthenticated}/>
            </Route>
          <Route path="/">
          <Home/>
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;