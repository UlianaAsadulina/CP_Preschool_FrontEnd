import Form from "../components/Form";
import "./AdminPage.css";
import "./EditGroupPage.css"
import { logout } from "../context/auth_context";
import { useNavigate } from "react-router-dom";

const { logout } = useAuth();
const nav = useNavigate();

function handleLogOut(e) {
    logout();
    nav('/auth');
}

export default function AdminPage() {
    return (
        <div className="admin">
            <h1>Administrator Page</h1>
            <button onClick={handleLogOut}>LogOut</button>
            <Form className="adminForm" />

        </div>
    );
}