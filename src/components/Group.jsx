import axios from "axios";
import Child from "./Child";
import Teacher from "./Teacher";

export default function Group({ group, setCurrent }) {



    console.log(group);


    const teachers = group.teachers;
    console.log('Teachers');
    console.log(teachers)
    const kids = group.kids;
    console.log("Kids")
    console.log(kids)

    



    return (
        <>
            <h3>Group {group.group}       Max group size: {group.kidsInGroup} </h3>
            <button>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <p>Teachers:  <button>Add new</button></p>
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