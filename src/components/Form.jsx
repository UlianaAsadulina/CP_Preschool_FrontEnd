import { useState, useEffect } from "react";
import axios from 'axios';
import Group from "./Group";
import AddGroupForm from "./AddGroupForm";


function Form() {

    const [groups, setGroups] = useState([]);
    const [current, setCurrent] = useState();
    const [showForm, setShowForm] = useState(false);

    function addHandle() {
        setShowForm(true);
    }

    async function getData() {
        const result = await axios.get('https://localhost3000/groups');
        // console.log(result.data);             
        setGroups(result.data);                
    };

    useEffect(() => {       
        try {            
            getData();
            //console.log(groups);
            // console.log("length"+groups.length);
        } catch (err) {
            console.error(err)
        }        
    }, [current]);





    return (
        <>
            <button className="button" onClick={addHandle}>Add New Group</button>
             {/* Show the form above all when "Add new" is clicked */}
             {showForm && (<AddGroupForm setShowForm={setShowForm} />)}
           
            { groups.map((group, index) => {
                return <Group key={index} group={group} setCurrent={setCurrent}/>
                })} 
            

        </>

    );
}

export default Form;