import { useState } from "react";

export default function AddGroupForm({setShowForm}) {
    const [groupName, setGroupName] = useState()
    const [max, setMax] = useState()
    
    function nameChange(e) {
        setGroupName(e.target.value);
    }

    function maxChange(e) {
        setMax(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();                    
        setShowForm(false); // Hide the form after submission

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="groupName"> Group name: 
                <input type="text" name="groupName" id="groupName" onChange={nameChange}/>
            </label>
            <label htmlFor="maxKids"> Maximum children in group: 
                <input type="text" name="maxKids" id="maxKids" onChange={maxChange}/>
            </label>
            {/* <label htmlFor="teachers">
                Teachers            
                <button>Add</button>
            </label>
            <label htmlFor="kids">
                Children            
                <button>Add</button>
            </label> */}
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>

        </form>
    )
}