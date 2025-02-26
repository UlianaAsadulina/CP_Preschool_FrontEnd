import { useState, useEffect } from "react";
import axios from "axios";

export default function Spots() {
    const [groups, setGroups] = useState([]);
    const [spots, setSpots] = useState([]);

    async function getData() {
        const result = await axios.get('http://localhost:3000/groups');
        console.log(result.data);             
        setGroups(result.data);
    };

    function getSpots() {
        let count=[];           
        
        for (let k=0; k<groups.length; k++){
            count[k] = { full: 0, morning:0, afternoon: 0 };
            let kids = groups[k].kids;            
            for (let i = 0; i < kids.length; i++) {
                switch (kids[i].attendTime) {
                        case "full": 
                            count[k].full++;
                            break;
                        case "morning":
                            count[k].morning++;
                            break;
                        case "afternoon":
                            count[k].afternoon++;
                            break;
                        default:
                            console.log("Invalid value")    ;
                }
            }
        
            console.log(`Object ${k} =${count[k].full}, ${count[k].morning}, ${count[k].afternoon}`);          
            let newSpots = { 
                full: groups[k].kidsInGroup- count[k].full ,
                morning: 5 - count[k].morning ,
                afternoon: 5 - count[k].afternoon
            }
            console.log(newSpots)
            setSpots(prev => [...prev, newSpots]);
            console.log(spots);
        }
    }


    useEffect(() => {
        try {
            getData(); 
            getSpots() ;
            console.log(spots);

            
        } catch (err) {
            console.error(err)
        }
    }, []);

    
    function showSpots () {
        return <div className="spots">
        {groups.map((group, index) => {
            return <div className="oneSpot" key={index}>
                <h4 className="subtitle">{group.group}</h4>
                <div style={{ display: "flex" }}>
                    <div style={{ padding: "10px" }}>
                        {spots.length!=0 ? spots[index].full: 0} spots
                    </div>
                    <div style={{ padding: "10px" }}>
                        Full day (7:00AM-6:00PM)
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ padding: "10px" }}>
                        {spots.length!=0 ? spots[index].morning : 0} spots
                    </div>
                    <div style={{ padding: "10px" }}>
                        Morning (8:30AM-11:30AM)
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ padding: "10px" }}>
                        {spots.length!=0 ? spots[index].afternoon : 0} spots
                    </div>
                    <div style={{ padding: "10px" }}>
                        Afternoon (12:30PM-3:30PM)
                    </div>
                </div>
            </div>

        })}    

        </div>
    }

        


    

    return (
        <div style={{ textAlign: "center"}}>
        <button className="spotBtn" onClick={() => getSpots()}>
            Show available spots
        </button>
        { spots.length!=0 ? showSpots() : <></> }                
        
    </div>);
}