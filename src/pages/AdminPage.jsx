import Form from "../components/Form";
import "./AdminPage.css";
import "./EditGroupPage.css"

export default function AdminPage() {
    return (
        <div className="admin">
            <h1>Administrator Page</h1>
            <Form className="adminForm" />

        </div>
    );
}