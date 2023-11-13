import React from "react"
import flight_icon from './img/flight_icon.png'
import user from './img/user.png'
import './navbar.css'
import JourneyDetails from "./journeyDetails";
import EachFlight from "./eachFlight";


const Navbar = (props) => {
  return (
    <div className="navbar_container">
      <div className="navbar_searchbar">
        <div className="login_icon_bar">
          <img src={flight_icon} alt='logo' height={50}></img>
          <img src={user} alt='logo' height={30}></img>
        </div>
        <h2>Millions of cheap flights. One simple search.</h2>
        <JourneyDetails></JourneyDetails>
      </div>
      <div className="flightResults">
        <EachFlight></EachFlight>
      </div>
    </div>
  )
};

export default Navbar;
