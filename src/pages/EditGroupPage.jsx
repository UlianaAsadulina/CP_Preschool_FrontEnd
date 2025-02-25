import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SlTrash } from "react-icons/sl";
import axios from "axios";

export default function EditGroupPage() {
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            group: "",
            kidsInGroup: 0,
            teachers: [],
            kids: []
        });

    async function getData() {
        const result = await axios.get(`http://localhost:3000/groups/${id}`);
        console.log(result.data);
        // destructure result
        const { teachers, kids, ...restData } = result.data[0];
        // update state
        setFormData({ ...restData, teachers: result.data[0].teachers, kids: result.data[0].kids });
    };

    useEffect(() => {
        try {
            getData();
        } catch (err) {
            console.error(err)
        }
    }, []);

    console.log(formData);

    console.log("ID:" + formData._id);
    console.log("Name:" + formData.group)

    const teachers = formData.teachers
    console.log("T " + teachers);
    const kids = formData.kids

    for (let i = 0; i < kids.length; i++) {
        const splitDate = kids[i].childDOB.split("T");
        const myDate = splitDate[0];
        kids[i].childDOB = myDate;
    };
    console.log("Ch " + kids);


    function handleChange(e) {
        console.log(e.target)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleTeacherChange(i, e) {
       
        let newTeachers =  [...formData.teachers]
        newTeachers[i][e.target.name] = e.target.value
        setFormData((prev) => (
            {
            ...prev,
            teachers: [...newTeachers],
            kids: [...prev.kids]
        }));
    }

    function handleTeacherDelete (i) {
        let newTeachers =  [...formData.teachers];
        // splice(start, deleteCount)
        newTeachers.splice(i, 1);
        setFormData((prev) => (
            { ...prev,
            teachers: [...newTeachers],
            kids: [...prev.kids]
            }
        ));
    }



    function handleKidChange(i, e) {
        let newKids =  [...formData.kids]
        newKids[i][e.target.name] = e.target.value        
        setFormData((prev) => ({
            ...prev,
            teachers: [...prev.teachers],            
            kids: [...newKids],
        }));
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
            <label htmlFor="group">
                <h3>Group name:
                    <select name="group" value={formData.group} onChange={handleChange}>
                        <option value="Infants (6wks-12months)">Infants (6wks-12months)</option>
                        <option value="Infants (12wks-18months)">Infants (12wks-18months)</option>
                        <option value="Toddlers (18m-30m)">Toddlers (18m-30m)</option>
                        <option value="Toddlers (30m-3yrs)">Toddlers (30m-3yrs)</option>
                        <option value="Preschool (3yrs-4yrs)">Preschool (3yrs-4yrs)</option>
                        <option value="Preschool (4yrs-5yrs)">Preschool (4yrs-5yrs)</option>
                    </select>
                </h3>
            </label>
            <br />
            <label htmlFor="kidsInGroup"> Maximum children in group:
                <input type="text" name="kidsInGroup" value={formData.kidsInGroup} onChange={handleChange} />
            </label>
            <h3>Teachers:  </h3>
            <table>
                <thead>
                    <tr>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Information</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {teachers.map((teacher, index) => {

                        return <tr key={index}>
                            <td>
                                <input key={index} type="text"
                                    name="teacherFirstName"
                                    value={teacher.teacherFirstName}
                                    onChange={(e) => handleTeacherChange(index, e)} />
                            </td>
                            <td>
                                <input key={index} type="text"
                                    name="teacherLastName"
                                    value={teacher.teacherLastName}
                                    onChange={(e) => handleTeacherChange(index, e)} />
                            </td>
                            <td>
                                <select key={index} name="teacherRole" value={teacher.teacherRole} 
                                        onChange={(e) => handleTeacherChange(index, e)}>
                                    <option value="Lead">Lead</option>
                                    <option value="Aid">Aid</option>
                                </select>
                            </td>
                            <td>
                                <textarea key={index} name="teacherInfo"
                                    rows="2" cols="70"
                                    value={teacher.teacherInfo}
                                    onChange={(e) => handleTeacherChange(index, e)}>
                                </textarea>
                            </td>
                            <td>
                                <button onClick={() => handleTeacherDelete (index)}><SlTrash /></button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
            <br />
            <h3>Children: </h3>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Attendance</th>
                        <th scope="col">Parent Name</th>
                        <th scope="col">Parent Phone</th>
                        <th scope="col">Parent Email</th>
                    </tr>
                </thead>
                <tbody>
                    {kids.map((kid, index) => {
                        return <tr key={index}>
                            <td>
                                <input type="text" key={index} name="childName" value={kid.childName}
                                    onChange={(e) => handleKidChange(index, e)}
                                />
                            </td>
                            <td>
                                <input type="date" key={index} name="childDOB" value={kid.childDOB} onChange={(e) => handleKidChange(index, e)} />
                            </td>
                            <td>
                                <select name="attendTime" key={index} value={kid.attendTime} onChange={(e) => handleKidChange(index, e)}>
                                    <option value="full">Full day</option>
                                    <option value="morning">Morning</option>
                                    <option value="afternoon">Afternoon</option>
                                </select>
                            </td>
                            <td>
                                <input type="text" name="parentName" key={index} value={kid.parentName} onChange={(e) => handleKidChange(index, e)} />
                            </td>
                            <td>
                                <input type="tel" name="parentPhone" key={index} value={kid.parentPhone} onChange={(e) => handleKidChange(index, e)} />
                            </td>
                            <td>
                                <input type="email" name="parentEmail" key={index} value={kid.parentEmail} onChange={(e) => handleKidChange(index, e)} />
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>

        </form>
    );

}