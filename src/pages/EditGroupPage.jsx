import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditGroupPage({current}) {

    const navigate = useNavigate();
    const [formData, setFormData] = useState(current);
    const teachers = group.teachers;
    const kids = group.kids;

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });       
    }

    function handleSubmit() {
        console.log(formData);
        navigate('/admin');
    }

    function handleCancel() {
        navigate('/admin');
    }




    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="group"> <h2>Group name:</h2>
                <input type="text" name="group" value={formData.group} onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="kidsInGroup"> Maximum children in group:
                <input type="text" name="kidsInGroup" value={formData.kidsInGroup} onChange={handleChange} />
            </label>

            <h3>Teachers:</h3>
            {teachers.map((teacher, index) => {
                return <div key={index}>
                    <label htmlFor="teacherRole"> Position:   </label>
                    <select name="teacherRole" value={formData.teacher[index].teacherRole} onChange={handleChange}>
                        <option value="Lead">Lead</option>
                        <option value="Aid">Aid</option>
                    </select>

                    <label htmlFor="teacherFirstName"> First name:
                        <input type="text" name="teacherFirstName" value={formData.teacher[index].teacherFirstName} onChange={handleChange} />
                    </label> 

                    <label htmlFor="teacherLastName"> Last name:
                        <input type="text" name="teacherLastName" value={formData.teacher[index].teacherLastName}onChange={handleChange} />
                    </label>
                    <br />
                    <label htmlFor="teacherInfo"> Information:  </label> <br />
                    <textarea name="teacherInfo" value={formData.teacher[index].teacherInfo} onChange={handleChange}></textarea>
                    <br />
                </div>
            })}

            <h3>Children:</h3>
            {kids.map((kid, index) => {
                            return <div key={index}>
                                        <label htmlFor="childName"> Child First and Last Name:
                                            <input type="text" name="childName" value={formData.kid[index].childName} onChange={handleChange} />
                                        </label>
                                        <br />
                                        <label htmlFor="childDOB"> Child Date of Birth:
                                            <input type="date" name="childDOB" value={formData.kid[index].childDOB}onChange={handleChange} /> 
                                        </label>
                                        Attends:
                                        <select name="attendTime" value={formData.kid[index].attendTime} onChange={handleChange}>
                                            <option value="full">Full day</option>
                                            <option value="morning">Morning</option>
                                            <option value="afternoon">Morning</option>
                                        </select>
                                        <br />
                                        <label htmlFor="parentName"> Parent/Guardian Name:
                                            <input type="text" name="parentName" value={formData.kid[index].parentName} onChange={handleChange} />
                                        </label>
                                        <br />
                                        <label htmlFor="parentPhone"> Parent/Guardian Phone number:
                                            <input type="tel" name="parentPhone" value={formData.kid[index].parentPhone} onChange={handleChange} /> 
                                        </label>
                                        <label htmlFor="parentEmail"> Parent/Guardian E-mail address:
                                            <input type="email" name="parentEmail" value={formData.kid[index].parentEmail}  onChange={handleChange} /> 
                                        </label>
                                        <br />
                                    </div>
            })}

            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            
        </form>
    );

}