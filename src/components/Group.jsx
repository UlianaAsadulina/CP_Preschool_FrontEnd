import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Teacher from "./Teacher";
import Child from "./Child";
import AddTeacherForm from "./AddTeacherForm";
import AddChildForm from "./AddChildForm";


export default function Group({ group, setCurrent }) {

    const nav=useNavigate();

    const [showTeacherForm, setShowTeacherForm] = useState(false);
    const [showChildForm, setShowChildForm] = useState(false);
   


    // console.log(group);


    const teachers = group.teachers;
    // console.log('Teachers');
    // console.log(teachers)
    const kids = group.kids;
    // console.log("Kids")
    // console.log(kids)

    async function handleDelete() {
        console.log("TRY to Delete " + group._id);
        const result = await axios.delete(`http://localhost:3000/groups/${group._id}`);
        console.log(result.data);
        setCurrent(result.data);

    }

    function handleEdit() {
        // setCurrent(group);
        console.log(group);
        nav(`/admin/update/${group._id}`);


    }



    return (
        <>
            <h3>Group: {group.group}       Max group size: {group.kidsInGroup} </h3>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <p>Teachers:  <button onClick={() => setShowTeacherForm(true)}>Add new</button></p>
            
            {showTeacherForm && (<AddTeacherForm group_id={group._id} setShowTeacherForm={setShowTeacherForm} setCurrent={setCurrent} />)}

            {teachers.map((teacher, index) => {
                return <Teacher key={index} group_id={group._id} teacher={teacher} setCurrent={setCurrent} />
            })}
            <p>Children:  <button onClick={() => setShowChildForm(true)}>Add new</button></p>
            {showChildForm && (<AddChildForm group_id={group._id} setShowChildForm={setShowChildForm} setCurrent={setCurrent}/>)}
            {kids.map((kid, index) => {
                return <Child key={index} group_id={group._id} child={kid} setCurrent={setCurrent} />
            })}


        </>
    );
}