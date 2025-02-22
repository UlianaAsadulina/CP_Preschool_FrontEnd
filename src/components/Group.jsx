import Child from "./Child";
import Teacher from "./Teacher";

export default function Group() {
    // const GroupSchema = new mongoose.Schema({
    //     group: {
    //         type: String,        
    //         enum: [
    //             "Infants (6wks-12months)",
    //             "Infants (12wks-18months)",
    //             "Toddlers (18m-30m)",
    //             "Toddlers (30m-3yrs)",
    //             "Preschool (3yrs-4yrs)",
    //             "Preschool (4yrs-5yrs)",
    //         ],
    //         default: "Preschool (4yrs-5yrs)",
    //         message: "${VALUE} is not valid group/age name",
    //         required: true,
    //     }, 
    //     kidsInGroup: {
    //         type: Number,
    //         enum: [10, 12, 14, 16, 24, 28],
    //         default: 28,
    //         required: true,
    //         message: "Value must corresponds Section 5104.033 | Staff to child ratios" },
    //     teachers: [ teacherSchema ],
    //     kids: [childSchema],
      
    // });


    return (
        <>
           <h3>Group {Group.group}       Max group size: {Group.kidsInGroup} </h3> 
           <button>Edit</button>
           <button>Delete</button>
           <p>Teachers:</p>
           <Teacher/>
           <p>Children:</p>
           <Child/>


        </>
    );
}