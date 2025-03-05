import { useState } from "react";
import axios from "axios";
import "../pages/AdminPage.css";


export default function AddTeacherForm({ group_id, setCurrent, setShowTeacherForm }) {

    const [formData, setFormData] = useState({});


    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }



    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let result = await axios.post(`https://localhost3000/groups/${group_id}/teachers`, formData);
            setCurrent(result);
            setShowTeacherForm(false);

        } catch (err) {
            console.error(err);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="teacherRole"> Position:   </label>
            <select name="teacherRole" defaultValue="Lead" onChange={handleChange}>
                <option value="Lead">Lead</option>
                <option value="Aid">Aid</option>
            </select>

            <label htmlFor="teacherFirstName"> First name:
                <input type="text" name="teacherFirstName" onChange={handleChange} />
            </label> 

            <label htmlFor="teacherLastName"> Last name:
                <input type="text" name="teacherLastName" onChange={handleChange} />
            </label><br />

            <label htmlFor="teacherInfo"> Information:  </label> <br />
            <textarea name="teacherInfo" onChange={handleChange}></textarea>

            <br />
            <button className="submit" type="submit">Submit</button>
            <button className="cancel" type="button" onClick={() => setShowTeacherForm(false)}>Cancel</button>

        </form>
    )
}