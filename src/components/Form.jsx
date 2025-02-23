import { useState, useEffect } from "react";
import axios from 'axios';
import Group from "./Group";


function Form() {

    const [groups, setGroups] = useState([]);

    async function getData() {
        const result = await axios.get('http://localhost:3000/groups');
        console.log(result.data);             
        setGroups(result.data);                
    };

    useEffect(() => {       
        try {            
            getData();
            console.log(groups);
            console.log("length"+groups.length);
        } catch (err) {
            console.error(err)
        }        
    }, []);




    return (
        <>
            <button>Group Management</button>
            <button>Teachers Management</button>
            <button>Kids Management</button>       
            { groups.map((group, index) => {
                return <Group key={index} group={group} />
                })} 
            

        </>

    );
}

export default Form;