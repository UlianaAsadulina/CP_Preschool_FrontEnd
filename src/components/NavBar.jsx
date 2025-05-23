import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return <nav>
            <Link to="/" className="title">The Preschool</Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/programms">Programms</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/schedule">Schedule</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/tuition">Tuition</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/contacts">Contact</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/admin">Administrator Page</Link>
                </li> 
                <li onClick={() => setMenuOpen(false)}>
                    <Link to="/auth">Login</Link>
                </li>                   
            </ul>
        </nav>
}