import { useState } from "react";
import axios from "axios";
import "../pages/EditGroupPage.css";

export default function AddGroupForm({ setShowForm }) {
  
    const [formData, setFormData] = useState({});

    function handleChange(e) {        
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let result = await axios.post('https://localhost3000/groups', formData);
            setShowForm(false); // Hide the form after submission
        } catch (err) {            
            console.error(err);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="group"> Group name:
            <select name="group" onChange={handleChange}>
                        <option value="">--select the age group--</option>
                        <option value="Infants (6wks-12months)">Infants (6wks-12months)</option>
                        <option value="Infants (12wks-18months)">Infants (12wks-18months)</option>
                        <option value="Toddlers (18m-30m)">Toddlers (18m-30m)</option>
                        <option value="Toddlers (30m-3yrs)">Toddlers (30m-3yrs)</option>
                        <option value="Preschool (3yrs-4yrs)">Preschool (3yrs-4yrs)</option>
                        <option value="Preschool (4yrs-5yrs)">Preschool (4yrs-5yrs)</option>
                    </select>
                
            </label>
            <label htmlFor="kidsInGroup"> Maximum children in group:
                <input type="text" name="kidsInGroup" onChange={handleChange} />
            </label>
            <br /> <br />
            <button className="submit" type="submit">Submit</button>
            <button className="cancel" type="button" onClick={() => setShowForm(false)}>Cancel</button>
            <br />

        </form>
    )
}