import { useState } from "react";
import axios from "axios";


export default function EditChildForm({group_id, child, setCurrent, setShowEditForm }) {
    
    const [formData, setFormData] = useState(child);
    const stringDate = toString(formData.childDOB);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });       
    }

    // function validateEmail(email) {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email)
    // };

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     validateEmail();
    //     if (validateEmail(formData.parentEmail)) {
    //         try {
    //             let result = await axios.post(`http://localhost:3000/groups/${group_id}/kids`, formData);
    //             setCurrent(result);
    //             setShowChildForm(false);
    //         } catch (err) {
    //             console.error(err);
    //         } 
    //     } else {
    //         window.alert("Email ! NOT valid. Enter valid address");
    //     }


    // };
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Changed:");
        console.log(formData);
        
        setShowEditForm(false);
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="childName"> Child First and Last Name:
                <input type="text" name="childName" value={formData.childName} onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="childDOB"> Child Date of Birth:
                <input type="date" name="childDOB" value={formData.childDOB} onChange={handleChange} /> 
            </label>
            Attends:
            <select name="attendTime" value={formData.attendTime} onChange={handleChange}>
                <option value="full">Full day</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Morning</option>
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
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowEditForm(false)}>Cancel</button>

        </form>
    )
}