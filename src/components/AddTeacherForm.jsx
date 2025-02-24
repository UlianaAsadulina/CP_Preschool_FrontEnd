import { useState } from "react";


export default function AddTeacherForm({ setShowTeacherForm }) {
    const [groupName, setGroupName] = useState()
    const [max, setMax] = useState()
   

    function nameChange(e) {
        setGroupName(e.target.value);
        
    }

    function maxChange(e) {
        setMax(e.target.value);}
        


    function handleSubmit(e) {
        e.preventDefault();
        setShowTeacherForm(false);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName"> Name:
                <input type="text" name="firstName" onChange={nameChange} />
            </label>
            
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowTeacherForm(false)}>Cancel</button>

        </form>
    )
}