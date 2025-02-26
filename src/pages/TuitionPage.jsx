export default function TuitionPage() {
    return(
        <>
        <h1>TUITION</h1>
        <div className="tuitionContainer">
            
            <div>
                <div className="programmImage">
                    <img src="/programmsImg/infant.jpg" alt="infant" />
                </div>
                <div style={{ textAlign: "center"}}>
                    <h2>Infants Weekly</h2>
                    <p>Full Day $270</p>
                    <p>Morning or Afternoon $65</p>                  
                </div>
            </div>
            <div>
                <div className="programmImage">
                    <img src="/programmsImg/toddler.jpg" alt="infant" />
                </div>
                <div style={{ textAlign: "center"}}>
                    <h2>Toddlers Weekly</h2>
                    <p>Full Day $250</p>
                    <p>Morning or Afternoon $60</p>                  
                </div>
            </div>
            <div>
                <div className="programmImage">
                    <img src="/programmsImg/preschool.jpg" alt="infant" />
                </div>
                <div style={{ textAlign: "center"}}>
                    <h2>Preschool Weekly</h2>
                    <p>Full Day $250</p>
                    <p>Morning or Afternoon $60</p>                  
                </div>
            </div>
            <div>
                <div className="programmImage">
                    <img src="/programmsImg/school.jpg" alt="infant" />
                </div>
                <div style={{ textAlign: "center"}}>
                    <h2>Before and After School</h2>
                    <p>Before and After $175</p>
                    <p>Before OR After $100</p>
                    <p>Daily $40 (used only for school closures)</p>                 
                </div>
            </div>
            <div>
                <div className="programmImage">
                    <img src="/programmsImg/camp.jpg" alt="infant" />
                </div>
                <div style={{ textAlign: "center"}}>
                    <h2>Summer Camp</h2>
                    <p>Full day $240</p>                                    
                </div>
            </div>
        </div>
    </>);
}