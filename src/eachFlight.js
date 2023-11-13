import React from "react"
import './eachFlight.css'
import plane from './img/plane.png'

const EachFlight = (props) => {
  return (
    <div className="eachFlightContainer">
        <div className="planeLogo">
            <p>indigo + scoot</p>
        </div>
        <div className="jouneyFrom">
            <div>17h : 30m</div>
            <div>BLR</div>
        </div>
        <div className="cardMid">
            <div className="journeyTime">
                11h : 45m
            </div>
            <div className="hrline"></div>
            <div className="flightType">
                Direct
            </div>
        </div>
        <div className="planeImage">
            <img src={plane} height={15}></img>
        </div>
        <div className="journeyTo">
            <div>10h : 45m</div>
            <div>SYD</div>
        </div>
        <div className="verticalLine"></div>
        <div className="rightside">
            <div className="journeyPrice">₹58,323</div>
            <div className="btn">
                <button>Select →</button>
            </div>
        </div>
    </div>
  )
};

export default EachFlight;
