import { useState } from "react";
import axios from "axios";

export default function EditTeacherForm({group_id, teacher, setShowEditForm, setCurrent}) {

    const [formData, setFormData] = useState(teacher);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });       
    }

    async function handleSubmit(e) {
        e.preventDefault(); 
        console.log("Changed:");
        console.log(formData);
        //router.patch('/:id/teachers/:teacherId'
        const result = await axios.patch(`http://localhost:3000/groups/${group_id}/teachers/${formData._id}`, formData);
        console.log("From database");
        console.log(result.data);
        setCurrent(result.data);              
        setShowEditForm(false);
    }




    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="teacherRole"> Position:   </label>
            <select name="teacherRole" 
                    value={formData.teacherRole} 
                    onChange={handleChange}>
                <option value="Lead">Lead</option>
                <option value="Aid">Aid</option>
            </select>

            <label htmlFor="teacherFirstName"> First name:
                <input  type="text" 
                        name="teacherFirstName" 
                        value={formData.teacherFirstName}
                        onChange={handleChange} />
            </label> 

            <label htmlFor="teacherLastName"> Last name:
                <input  type="text" 
                        name="teacherLastName" 
                        value={formData.teacherLastName} 
                        onChange={handleChange} />
            </label>
            <br />

            <label htmlFor="teacherInfo"> Information:  </label> <br />
            <textarea   name="teacherInfo" 
                        value={formData.teacherInfo}
                        onChange={handleChange}></textarea>

            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowEditForm(false)}>Cancel</button>

        </form>
    )
}