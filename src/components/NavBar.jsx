import { Link } from "react-router-dom";

export default function NavBar() {
    return <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/programms"}>Programms</Link>
            <Link to={"/schedule"}>Schedule</Link>
            <Link to={"/tuition"}>Tuition</Link>
            <Link to={"/contacts"}>Contacts</Link>
            <Link to={"/admin"}>Administrator</Link> 
        </nav>
}