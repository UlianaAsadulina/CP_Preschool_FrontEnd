import Carousel from "../components/Carousel";
import Spots from "../components/Spots";
import WelcomeMessage from "../components/WelcomeMessage";

export default function HomePage() {
    return (
        <>
            <div className="pageContainer">
                <WelcomeMessage />
                <Carousel />
            </div>
            <h1>Enrolment Availability</h1>
            <h4 className="subtitle">If we have an opening that fits your families needs, please, call the center or set up a tour. 
                After a tour, spots can be held with a registration fee of $50 for up to two weeks.</h4>
            <Spots />
            
        </>
    );
}