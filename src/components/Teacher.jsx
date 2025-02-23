export default function Teacher({teacher}) {

    // const teacher = {
    //     teacherFirstName: "Emma",
    //     teacherLastName: "Morris",
    //     teacherRole: "Lead",
    //     teacherInfo: "Master's in Curriculum Development, 10+ years designing engaging learning experiences for preschoolers."
    // }



    return (
        <div className="teacher">
            <p> {teacher.teacherRole}  |  
                {teacher.teacherFirstName}   {teacher.teacherLastName}  |  
                <button>Edit</button>
                <button>Delete</button></p>
            <p> {teacher.teacherInfo}</p>
            
        </div>
    );
}