import { useState } from "react";
import axios from "axios";

export default function AddGroupForm({ setShowForm }) {
    // const [groupName, setGroupName] = useState()
    // const [max, setMax] = useState()
    const [formData, setFormData] = useState({});

    function nameChange(e) {
        // setGroupName(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function maxChange(e) {
        // setMax(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let result = await axios.post('http://localhost:3000/groups', formData);
            setShowForm(false); // Hide the form after submission
        } catch (err) {
            window.alert(err);
            console.error(err);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="group"> Group name:
                <input type="text" name="group" onChange={nameChange} />
            </label>
            <label htmlFor="kidsInGroup"> Maximum children in group:
                <input type="text" name="kidsInGroup" onChange={maxChange} />
            </label>
            {/* <label htmlFor="teachers">
                Teachers            
                <button>Add</button>
            </label>
            <label htmlFor="kids">
                Children            
                <button>Add</button>
            </label> */}
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>

        </form>
    )
}