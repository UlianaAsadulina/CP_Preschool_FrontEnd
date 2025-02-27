import { MdLocationOn, MdLocalPhone, MdOutlineMail } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";

export default function ContactsPage() {
    return (
    <>
        <h1>Contact Us</h1> 
        <div style={{ display: "flex"}}>
            <div className="proggramText" style={{ width: "50%"}}>
                 <h2 className="subtitle">The Preschool</h2>
                    <p><MdLocationOn style={{ paddingRight: "15px" }} /> 8249 Clough Pike, Cincinnati, OH 45244</p>
                    <p><MdLocalPhone style={{ paddingRight: "15px" }} />513-123-4567</p>
                    <p><MdOutlineMail style={{ paddingRight: "15px" }} />thepreschool@gmail.com</p>
                    <div style={{ display: "flex"}}>
                        <div><LuCalendarClock style={{ paddingRight: "15px" }} /></div>
                        <div>
                            <p>Mon-Thur</p>
                            <p>Friday</p>
                        </div>
                        <div style={{ paddingLeft: "15px"}}>
                            <p>07:00 am - 06:00 pm</p>
                            <p>07:00 am - 06:00 pm</p>
                        </div>
                    </div>
            </div>
            <div>
                <img src="/map.jpg" alt="map" width={"400px"} height={"400px"}/>
            </div>
        </div>       
        

        
        <h1>Our administrators</h1>
        <div style={{ display: "flex"}}>
            <div style={{ width: "50%"}}>
                <div className="personImg">
                    <img src="/profile-picture.jpg" alt="photo" />
                </div>
                <h3 className="subtitle">FirstName LastName</h3>
                <h4 className="subtitle">Owner and Prescool Teacher</h4>

                <div className="proggramText">
                    <p>I am the proud owner and director of The Preschool with over 10 years of experience in early childhood education and a degree in Child Development</p>
                    <p>I have dedicated my career to creating a nurturing and engaging environment where little learners can thrive.</p>
                    <p>My passion for working with young children began early, and over the years, I've taught in preschool classrooms, developed curriculum, and helped families 
                        build a strong foundation for their child's growth. I believe in hands-on learning, creativity, and fostering a love for discovery through play.</p>
                    <p>As someone who values health, nature, and movement, I incorporate outdoor play, music, and exploration into our daily routines.</p>
                    <p>My goal is to make learning fun, meaningful, and filled with joy, ensuring that every child feels safe, supported, and excited to come to school each day.</p>
                </div>
            </div>
            <div  style={{ width: "50%"}}>
                <div className="personImg">
                        <img src="/profile-picture.jpg" alt="photo" />
                </div>
                <h3 className="subtitle">FirstName LastName</h3>
                 <h4 className="subtitle">Administrator and Location Coordinator</h4>

                <div className="proggramText">
                        <p> With a degree in Early Childhood Education and over eight years of experience in preschool administration, I am dedicated to ensuring a safe, nurturing, and enriching environment for every child and family we serve.</p>
                        <p>My journey in early childhood education began in the classroom, where I discovered my passion for supporting both children and educators. Now, as an administrator, I focus on creating a well-organized, welcoming space where learning and play go hand in hand. From coordinating daily activities to maintaining a warm and supportive atmosphere, my goal is to make every family feel at home.</p>
                        <p>I believe that strong communication, a caring community, and a focus on each child's well-being make all the difference. I'm here to help with any questions, support our amazing teachers, and ensure that your little one has a wonderful experience at our preschool.</p>
                </div>
            </div>
        </div>
        
  
  



    </>);
}