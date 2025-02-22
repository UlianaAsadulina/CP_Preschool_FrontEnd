export default function Teacher() {

    const teacher = {
        teacherFirstName: "Emma",
        teacherLastName: "Morris",
        teacherRole: "Lead",
        teacherInfo: "Master's in Curriculum Development, 10+ years designing engaging learning experiences for preschoolers."
    }



    return (
        <div className="teacher">
            <p> {teacher.teacherRole}  |  {teacher.teacherFirstName}  |  {teacher.teacherLastName}  |  {teacher.teacherInfo}</p>
            <button>Edit</button>
            <button>Delete</button>

        </div>
    );
}