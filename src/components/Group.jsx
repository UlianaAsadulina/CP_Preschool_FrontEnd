import { useState } from "react";
import Child from "./Child";
import Teacher from "./Teacher";

export default function Group( {group, setCurrent} ) {
   
   
    
    console.log(group); 
    // setCurrent(group);

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
           <button>Delete</button>
           <p>Teachers:</p>
           { teachers.map((teacher, index) => {
            return <Teacher key={index} group_id={group._id} teacher={teacher} setCurrent={setCurrent}/>})}
           <p>Children:</p>
           { kids.map((kid, index) => {
            return <Child key={index} group_id={group._id} child={kid} setCurrent={setCurrent}/>})}        


        </>
    );
}