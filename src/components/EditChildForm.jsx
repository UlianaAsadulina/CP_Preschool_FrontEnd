import { useState } from "react";
import axios from "axios";
import "../pages/AdminPage.css";


export default function EditChildForm({group_id, child, setCurrent, setShowEditForm }) {
    
    const [formData, setFormData] = useState(child);
    
    const splitDate = formData.childDOB.split("T");
    const myDate = splitDate[0];


    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });       
    }


    // };
    async function handleSubmit(e) {
        e.preventDefault(); 
        // console.log("Child changed:");
        // console.log(formData);
        //router.patch('/:id/kids/:kidId'
        const result = await axios.patch(`http://localhost:3000/groups/${group_id}/kids/${formData._id}`, formData);
        // console.log("From database");
        // console.log(result.data);
        setCurrent(result.data);              
        setShowEditForm(false);
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="childName"> Child First and Last Name:
                <input type="text" name="childName" value={formData.childName} onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="childDOB"> Child Date of Birth:
                <input type="date" name="childDOB" value={myDate} onChange={handleChange} /> 
            </label>
            Attends:
            <select name="attendTime" value={formData.attendTime} onChange={handleChange}>
                <option value="full">Full day</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
            </select>
            <br />
            <label htmlFor="parentName"> Parent/Guardian Name:
                <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="parentPhone"> Parent/Guardian Phone number:
                <input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} /> 
            </label>
            <label htmlFor="parentEmail"> Parent/Guardian E-mail address:
                <input type="email" name="parentEmail" value={formData.parentEmail}  onChange={handleChange} /> 
            </label>
            <br />
            <button className="submit" type="submit">Submit</button>
            <button className="cancel" type="button" onClick={() => setShowEditForm(false)}>Cancel</button>

        </form>
    )
}