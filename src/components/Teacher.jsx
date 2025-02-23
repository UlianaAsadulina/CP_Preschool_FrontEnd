import axios from "axios";

export default function Teacher({ group_id, teacher, setCurrent }) {

    // const teacher = {
    //     teacherFirstName: "Emma",
    //     teacherLastName: "Morris",
    //     teacherRole: "Lead",
    //     teacherInfo: "Master's in Curriculum Development, 10+ years designing engaging learning experiences for preschoolers."
    // }
    async function handleDelete() {
        console.log("TRY to Delete " + teacher._id + " " + " from " + group_id);
        const result = await axios.delete(`http://localhost:3000/groups/${group_id}/teachers/${teacher._id}`);
        console.log(result.data);
        setCurrent(result.data);

    }



    return (
        <div className="teacher">
            <p> {teacher.teacherRole}  |
                {teacher.teacherFirstName}   {teacher.teacherLastName}  |
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button></p>
            <p> {teacher.teacherInfo}</p>

        </div>
    );
}