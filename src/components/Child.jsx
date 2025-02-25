import axios from 'axios';
import { useState } from 'react';
import EditChildForm from './EditChildForm';
import { SlPencil, SlTrash } from "react-icons/sl";

export default function Child({ group_id, child, setCurrent }) {
    const [showEditForm, setShowEditForm] = useState(false);

    // const child = {
    //     childName: "Ava Johnson",
    //     childDOB: "2020-12-05",
    //     attendTime: "full",
    //     parentName: "Liam Johnson",
    //     parentPhone: 1987654321,
    //     parentEmail: "liam.johnson@example.com"
    // }

    async function handleDelete() {
        // router.patch('/:id/kids/:kidId'
        console.log("TRY to Delete " + child._id + " " + child.childName + " from " + group_id);
        const result = await axios.delete(`http://localhost:3000/groups/${group_id}/kids/${child._id}`);
        console.log(result.data);
        setCurrent(result.data);
        // window.location.reload();
    }

    const splitData = child.childDOB.split("T");
    const onlyData = splitData[0]
    // console.log(onlyData);



    return (
        <div className='child'>
            <p> {child.childName} |
                {onlyData}  |
                {child.attendTime}  |
                {child.parentName}  |
                {child.parentPhone}  |
                {child.parentEmail}  |
                <button onClick={() => setShowEditForm(true)} 
                        disabled={ showEditForm ? true : false}                     
                ><SlPencil /></button> |
                <button onClick={handleDelete}
                        disabled={ showEditForm ? true : false}   
                ><SlTrash /></button>
            </p>
            {showEditForm && (<EditChildForm group_id={group_id} child={child} setShowEditForm={setShowEditForm} setCurrent={setCurrent} />)}
        </div>
    );
}