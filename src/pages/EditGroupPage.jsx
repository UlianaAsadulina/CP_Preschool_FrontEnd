import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SlTrash } from "react-icons/sl";
import axios from "axios";

export default function EditGroupPage() {

    const { id } = useParams();
    console.log(id)

    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    async function getData() {
        const result = await axios.get(`http://localhost:3000/groups/${id}`);   
        console.log(result.data);     
        // destructure result
        const { teachers, kids, ...restData } = result.data[0];       
        // update state
        setFormData({ ...restData, teachers: result.data[0].teachers, kids: result.data[0].kids});  
    };

    useEffect(() => {       
        try {            
            getData();           
        } catch (err) {
            console.error(err)
        }        
    }, [id]);
   

    console.log(formData);

    console.log("ID:"+formData._id);
    console.log("Name:"+formData.group)

    const teachers = formData.teachers
    console.log(teachers);
    const kids = formData.kids
    console.log(kids)


    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });       
    }

    // function handleteacherChange(e) {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });       
    // }
    // function handleChildChange(e) {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });       
    // }

    function handleSubmit() {
        console.log(formData);
        navigate('/admin');
    }

    function handleCancel() {
        navigate('/admin');
    }

    function oneItem({teacher}) {
        return (
            <>
                 <td>
                            <input  type="text" 
                                    name="teacherFirstName" 
                                    value={teacher.teacherFirstName} 
                                    onChange={handleChange} />
                        </td>
                        <td>
                            <select name="teacherRole" value={teacher.teacherRole} onChange={handleChange}>
                                <option value="Lead">Lead</option>
                                <option value="Aid">Aid</option>
                            </select>
                        </td>
                        <td>
                            <textarea  name="teacherInfo" 
                                        value={teacher.teacherInfo} 
                                        onChange={handleChange}>
                            </textarea>
                        </td>
            </>

        )
    }
    function renderRow(items) {
        const listItems = []
        for (let i = 0; i < items.length; i++) {
          listItems.push(<tr key={i}>{oneItem(items[i])}</tr>)
        }
      
        return listItems
      }
    



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="group"> <h3>Group name:
                <input type="text" name="group" value={formData.group} onChange={handleChange} />
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
                        <th scope="col">Teacher</th>
                        <th scope="col">Role</th>
                        <th scope="col">Information</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { renderRow(teachers)}

                {/* {teachers.map((teacher, index) => {

                    return <tr key={index}>
                                <td>
                                    <input  type="text" 
                                            name="teacherFirstName" 
                                            value={teacher.teacherFirstName} 
                                            onChange={handleChange} />
                                </td>
                                <td>
                                    <select name="teacherRole" value={teacher.teacherRole} onChange={handleChange}>
                                        <option value="Lead">Lead</option>
                                        <option value="Aid">Aid</option>
                                    </select>
                                </td>
                                <td>
                                    <textarea  name="teacherInfo" 
                                                value={teacher.teacherInfo} 
                                                onChange={handleChange}>
                                    </textarea>
                                </td>
                                <td>
                                    <button><SlTrash /></button>
                                </td>
                    </tr>
                })} */}
                                     
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>                    
                </tbody>
            </table>

            {/* <h3>Teachers:</h3>
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
            })} */}

            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            
        </form>
    );

}