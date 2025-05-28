import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth_context';



const SignUp = ({ setNewUser }) => {

    const nav = useNavigate();
    const { signUp } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const [errors, setErrors] = useState([]);


    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            return setErrors([{ msg: "Passwords do not match" }]);

        }

        try {
            setErrors([]); //clean errors from previous 
            await signUp(formData);

            console.log("Form submitted:", formData);
            // Reset form after submission
            setFormData({
                name: "",
                email: "",
                password: "",
                password2: "",
            });
            nav("/admin");
        } catch (err) {
            console.log(err);
            const apiErrors = err.response.data.errors;
            setErrors(apiErrors);
            setTimeout(() => setErrors([]), 3000);
        }
    };

    const handleClick = () => {
        setNewUser(false);
    };


    return (
        <div className="forms">
            <h2>SignUp</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="name1">Name: </label>
                <input
                    onChange={handleChange}
                    type="text"
                    id="name1"
                    name="name"
                    placeholder="First and Last Name"
                />
                <label htmlFor="email1">Email: </label>
                <input
                    onChange={handleChange}
                    type="email"
                    id="email1"
                    name="email"
                    placeholder="Email"
                />
                <label htmlFor="password1">Password: </label>
                <input
                    onChange={handleChange}
                    type="password"
                    id="password1"
                    name="password"
                    placeholder="Password"
                    minLength="6"
                />
                <label htmlFor="password2">Confirm password: </label>
                <input
                    onChange={handleChange}
                    type="password"
                    id="password2"
                    name="password2"
                    placeholder="Confirm Password"
                    minLength="6"
                />
                <button type="submit">
                    Submit
                </button>
                <p>Minimum password requirements:</p>
                <ul>
                    <li>10 characters long</li>
                    <li>1 upper-case letter</li>
                    <li>1 lower-case letter</li>
                    <li>1 number</li>
                    <li>1 special character</li>
                </ul>

                {/* errrors block for display */}
                {errors.length > 0 ? errors.map((e, index) => (
                    <p key={index} className="text-red"> {e.msg} </p>)) : null
                }

            </form>
            <p>
                Already have an account? <button onClick={handleClick}>Log In</button>
            </p>
        </div>
    );
};

export default SignUp;
