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
        const result = await axios.delete(`https://thepreschool.onrender.com/groups/${group_id}/kids/${child._id}`);
        console.log(result.data);
        setCurrent(result.data);
        // window.location.reload();
    }

    const splitData = child.childDOB.split("T");
    const onlyData = splitData[0]
    // console.log(onlyData);



    return (<>
        <div className='child'>
                <div style={{ width: "160px" }}>{child.childName}</div>
                <div style={{ width: "100px" }}>{onlyData}</div>
                <div style={{ width: "90px" }}>{child.attendTime}</div>
                <div style={{ width: "160px" }}>{child.parentName}</div>
                <div style={{ width: "110px" }}>{child.parentPhone}</div>
                <div style={{ width: "250px" }}>{child.parentEmail}</div>

                <button className='editBtn'
                        onClick={() => setShowEditForm(true)} 
                        disabled={ showEditForm ? true : false}                     
                ><SlPencil /></button>
                <button className='delBtn'
                        onClick={handleDelete}
                        disabled={ showEditForm ? true : false}   
                ><SlTrash /></button>
        </div>    
            {showEditForm && (<EditChildForm group_id={group_id} child={child} setShowEditForm={setShowEditForm} setCurrent={setCurrent} />)}
        </>
    );
}