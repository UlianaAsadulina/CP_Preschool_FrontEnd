import Form from "../components/Form";

import "./AdminPage.css";
import "./EditGroupPage.css"
import { useAuth } from "../context/auth_context";
import { useNavigate } from "react-router-dom";


export default function AdminPage() {
    const { logout } = useAuth();
    const nav = useNavigate();

    function handleLogOut(e) {
        logout();
        nav('/auth');
    }

 


    return (
        <div className="admin">
            <button className="button" onClick={handleLogOut}>LogOut</button>
            <br/>
            <h1>Administrator Page  </h1>
       
            <Form className="adminForm" />

        </div>
    );
}