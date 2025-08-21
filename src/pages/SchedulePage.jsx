import Spots from "../components/Spots";
import TourForm from "../components/TourForm";

export default function SchedulePage() {
    return ( <>
        <h1>Our Schedule</h1>
        <div className="scheduleContainer">
            <div>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
            </div>
            <div>
                <p>7:00 AM - 6:00 PM</p>
                <p>7:00 AM - 6:00 PM</p>
                <p>7:00 AM - 6:00 PM</p>
                <p>7:00 AM - 6:00 PM</p>
                <p>7:00 AM - 5:30 PM</p>
            </div>
            <div>
                <p>Part-time classes</p>
                <p>Morning      8:30AM - 11:30AM</p>
                <p>Afternoon   12:30PM - 3:30PM</p>
            </div>
            
        </div>
        <h2>Enrollment</h2>
        <div className="proggramText">
            <p>Enrollment is based off a first come first serve basis.</p>
            <p>We no longer have waiting list for either location. This page is updated at the beginning of each month. We try our best to keep this page updated, however we always recommend calling the center if you are interested in current openings.</p> 
            <p>You may see an opening that fits your child's age however, different classrooms may have requirements, such as child must be potty trained, walking, non-mobile, etc. </p>
            <p>If we have an opening that fits your families needs please call the center or set up a tour. After a tour, spots can be held with a registration fee of $50 for up to two weeks.</p>
            <p>
                Enrolment documents: 
                <a href="/public/documents/EnrollmentForm.pdf" target="_blank"> enrollment form</a>  
                & 
                <a href="/public/documents/MedicalForm.pdf" target="_blank"> medical form</a>
            </p>
        </div>
        
        <Spots />
        <TourForm />
       
        
    </>);

}