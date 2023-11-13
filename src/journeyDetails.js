import React, { useState } from "react"
import './journeyDetails.css'

const JourneyDetails = (props) => {

    const [From , setFrom] = useState();
    const [To , setTo] = useState();
    const [Depart , setDepart] = useState();
    const [Return , setReturn] = useState();
    const [Adult , setAdult] = useState();
    const [Child , setChild] = useState();
    const [Class , setClass] = useState();

    function submitHandler(e){
        e.target.preventDefault()
        console.log(From , To , Depart , Return , Class);
    }

  return (
    <div className="detailsContainer">
        <form onSubmit={submitHandler} className="fromContainer">
            <div className="from">
                <label htmlFor="from">From</label>
                <input id="from" placeholder="Country , City , Airport" value={From}></input>
            </div>
            <div className="to">
                <label htmlFor="to">To</label>
                <input id="to" placeholder="Country , City , Airport" value={To}></input>
            </div>
            <div className="depart">
                <label htmlFor="depart">Depart</label>
                <input id="depart" placeholder="Add Date" value={Depart}></input>
            </div>
            <div className="return">
                <label htmlFor="return">Return</label>
                <input id="return" placeholder="Add Date" value={Return}></input>
            </div>
            <div className="passanger">
                <label htmlFor="passanger">To</label>
                <input id="passanger" placeholder="Travellers and Cabin class" value={Class}></input>
            </div>
            <button>Search</button>
        </form>
    </div>
  )
};

export default JourneyDetails;
