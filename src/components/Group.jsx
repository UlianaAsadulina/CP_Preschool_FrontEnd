import axios from "axios";
import { useState } from "react";
import Child from "./Child";
import Teacher from "./Teacher";
import AddTeacherForm from "./AddTeacherForm";

export default function Group({ group, setCurrent }) {

    const [showTeacherForm, setShowTeacherForm] = useState(false);
   


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



    return (
        <>
            <h3>Group: {group.group}       Max group size: {group.kidsInGroup} </h3>
            <button>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <p>Teachers:  <button onClick={() => setShowTeacherForm(true)}>Add new</button></p>
             {/* Show the AddTeacher form above all teachers when "Add new" button is clicked */}
             {showTeacherForm && (<AddTeacherForm setShowTeacherForm={setShowTeacherForm} />)}
            {teachers.map((teacher, index) => {
                return <Teacher key={index} group_id={group._id} teacher={teacher} setCurrent={setCurrent} />
            })}
            <p>Children:  <button>Add new</button></p>
            {kids.map((kid, index) => {
                return <Child key={index} group_id={group._id} child={kid} setCurrent={setCurrent} />
            })}


        </>
    );
}