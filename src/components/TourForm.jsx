import { useState } from "react";
import "./TourForm.css";
import Alert from '@mui/material/Alert';

export default function TourForm({ setShowForm }) {

    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1660b308-a064-4918-bff0-bcb713ebc9a6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            <Alert severity="success">
                Form Submitted Successfully
            </Alert>
            setResult("Form Submitted Successfully");
            console.log(data);
            event.target.reset();
        } else {
            console.log("Error", data);
            <Alert severity="error">
                This is an error Alert: {data.message}
            </Alert>
            setResult(data.message);
        }
        console.log(result);
        window.alert(data.message);
        setShowForm(false);
    };

    return (
        <form className="tourForm" onSubmit={handleSubmit}>
            <p>
                If you would like more information about our center you can set up a
                tour. Just fill out the following form:
            </p>
            <div className="formContainer">
                <div className="column">
                    <input type="text" name="First name" placeholder="First name" />
                </div>
                <div className="column">
                    <input type="text" name="Last name" placeholder="Last name" />
                </div>
            </div>
            <div className="formContainer">
                <div className="column">
                    <input type="email" name="Email" placeholder="E-mail" />
                </div>
                <div className="column">
                    <input type="tel" name="Phone" placeholder="Phone" />
                </div>
            </div>
            <div className="formContainer">
                <div className="column">
                    <label htmlFor="age">
                        Select Age Group <br />
                        <select name="age">
                            <option value="">--Select option--</option>
                            <option value="Infants (6w-12m)">
                                Infants not mobile (6wks-12months)
                            </option>
                            <option value="Infants (10m-18m)">
                                Infants mobile (12wks-18months)
                            </option>
                            <option value="Toddlers (18m-30m)">
                                Toddlers (18months-30months)
                            </option>
                            <option value="Toddlers (30m-3y)">
                                Toddlers (30months-3yrs)
                            </option>
                            <option value="Preschool (3-4)">Preschool (3yrs-4yrs)</option>
                            <option value="Preschool (4-5)">Preschool (4yrs-5yrs)</option>
                            <option value="Before and After">Before and after school</option>
                            <option value="Days off">School's DayOff</option>
                            <option value="Summer camp">Summer Camp</option>
                        </select>
                    </label>
                </div>
                <div className="column">
                    <label htmlFor="time">
                        {" "}
                        Select time: <br />
                        <select name="time">
                            <option value="">--Select option--</option>
                            <option value="full">Full day</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                        </select>
                    </label>
                </div>
            </div>

            <textarea name="comments" placeholder="Additional comments"></textarea>
            <br />
            <div className="btnContainer">
                <button type="submit" className="button">
                    SEND
                </button>
            </div>
        </form>
    );
}
