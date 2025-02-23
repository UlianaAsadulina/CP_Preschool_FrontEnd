import axios from 'axios';

export default function Child({group_id, child, setCurrent}) {

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
        console.log("TRY to Delete "+child._id+" "+child.childName+ " from "+group_id);
       


       const result = await axios.delete(`http://localhost:3000/groups/${group_id}/kids/${child._id}`); 
console.log(result.data); 
        
        setCurrent(result.data);        
        // window.location.reload();
    }    




    return (
        <div className='child'>
            <p> {child.childName} |  
                {child.childDOB}  | 
                {child.attendTime}  |
                {child.parentName}  | 
                {child.parentPhone}  |  
                {child.parentEmail}  |
            <button>Edit</button> | 
            <button onClick={handleDelete}>Delete</button>
            </p>
        </div>
    );
}