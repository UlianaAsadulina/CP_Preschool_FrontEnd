import axios from "axios";
import { useState } from "react";
import EditTeacherForm from "./EditTeacherForm";
import { SlPencil, SlTrash } from "react-icons/sl";

export default function Teacher({ group_id, teacher, setCurrent }) {


    const [showEditForm, setShowEditForm] = useState(false);

    async function handleDelete() {
        console.log("TRY to Delete " + teacher._id + " " + " from " + group_id);
        const result = await axios.delete(`http://localhost:3000/groups/${group_id}/teachers/${teacher._id}`);
        //console.log(result.data);
        setCurrent(result.data);

    }

    



    return (
        <div className="teacher">
            
            <p> {teacher.teacherRole}  |
                {teacher.teacherFirstName}   {teacher.teacherLastName}  
                <button onClick={() => setShowEditForm(true)} disabled={ showEditForm ? true : false} ><SlPencil /></button>
                <button onClick={handleDelete} disabled={ showEditForm ? true : false} ><SlTrash /></button></p>
            <p> {teacher.teacherInfo}</p>

            {showEditForm && (<EditTeacherForm group_id={group_id} teacher={teacher} setShowEditForm={setShowEditForm} setCurrent={setCurrent} />)}

        </div>
    );
}