import axios from "axios";
import { useState } from "react";
import EditTeacherForm from "./EditTeacherForm";
import { SlPencil, SlTrash } from "react-icons/sl";

export default function Teacher({ group_id, teacher, setCurrent }) {


    const [showEditForm, setShowEditForm] = useState(false);

    async function handleDelete() {
        console.log("TRY to Delete " + teacher._id + " " + " from " + group_id);
        const result = await axios.delete(`https://localhost3000/groups/${group_id}/teachers/${teacher._id}`);
        //console.log(result.data);
        setCurrent(result.data);

    }

    



    return (<>
        
        <div className="teacher">
           
                <div style={{ width: "50px" }}> {teacher.teacherRole}  </div>
                <div style={{ width: "70px" }}>
                    {teacher.teacherFirstName}
                </div>
                <div style={{ width: "100px" }}>
                    {teacher.teacherLastName}
                </div>
                <div style={{ width: "650px" }}>
                {teacher.teacherInfo}
                </div>                     
                <button className="editBtn" onClick={() => setShowEditForm(true)} disabled={ showEditForm ? true : false} ><SlPencil /></button>
                <button className="delBtn" onClick={handleDelete} disabled={ showEditForm ? true : false} ><SlTrash /></button>
            

        </div>    
            
                
             

            {showEditForm && (<EditTeacherForm group_id={group_id} teacher={teacher} setShowEditForm={setShowEditForm} setCurrent={setCurrent} />)}

        
            </>);
}