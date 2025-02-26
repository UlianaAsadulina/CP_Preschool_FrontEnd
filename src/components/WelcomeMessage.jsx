import { useState } from "react";
import TourForm from "./TourForm"

export default function WelcomeMessage() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className='welcomeMessage'>
            <h1>Welcome to The Preschool</h1>
            <h2 className="subtitle">A Home Away from Home</h2>
            <p>We are a family-owned, small local daycare dedicated to providing a warm, loving, and safe environment where your little ones can learn, play, and grow. </p> 
            <p>At our center, every child is part of our extended family, receiving personalized care and attention.</p>
            <p> Come visit us and see the magic in action!</p> 
            <p>Schedule a tour today to explore our nurturing spaces, meet our caring team, and discover why families trust us with their most precious treasures.</p>
            <div className="btnContainer">
              <button className="bookBtn" onClick={() => setShowForm(!showForm)}>Book a Tour</button>  
            </div>
            
            {showForm ? <TourForm setShowForm={setShowForm} />: <></>}
        </div>
    )
}