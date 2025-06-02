import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth_context';
import { FiEye, FiEyeOff } from "react-icons/fi";



const SignUp = ({ setNewUser }) => {

    const nav = useNavigate();
    const { signUp } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    //use to show strenght of password
    // const [message, setMessage] = useState();
    const [number, setHasNumber] = useState(false);
    const [lower, setLower] = useState(false);
    const [upper, setUpper] = useState(false);
    const [spec, setSpec] = useState(false);
    const [long8, setLong] = useState(false);
    // const [color, setColor] = useState()

    //use to show backend errors
    const [errors, setErrors] = useState([]);


    let hasLowLetter;
    let hasUpLetter;
    let hasSpecial;
    let len;
    let score = 0;

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    function evaluatePasswordStrength(password) {


        if (!password) return '';

        // Check password length
        if (password.length > 8) {
            score += 1;
            setLong(true)

        } else setLong(false);

        // Contains lowercase
        if (/[a-z]/.test(password)) {
            score += 1;
            setLower(true);
        } else setLower(false);

        // Contains uppercase
        if (/[A-Z]/.test(password)) {
            score += 1;
            setUpper(true);
        } else setUpper(false);
        // Contains numbers
        if (/\d/.test(password)) {
            score += 1;
            setHasNumber(true);
        } else setHasNumber(false);
        // Contains special characters
        if (/[^A-Za-z0-9]/.test(password)) {
            score += 1;
            setSpec(true);
        } else setSpec(false);

    }


    function handleChange(e) {

        //password strength checker components:
        // ^ - Start of the string.
        // (?=.*[a-z]) - At least one lowercase letter.
        // (?=.*[A-Z]) - At least one uppercase letter.
        // (?=.*\d) - At least one digit.
        // (?=.*[@$!%*?&]) - At least one special character.
        // [A-Za-z\d@$!%*?&]{8,} - Matches a combination of allowed characters with a minimum length of 8.
        // $ - End of the string.




        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (e.target.name == 'password') {
            evaluatePasswordStrength(e.target.value);
        }

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
                <br />
                <label htmlFor="email1">Email: </label>
                <input
                    onChange={handleChange}
                    type="email"
                    id="email1"
                    name="email"
                    placeholder="Email"
                />
                <br />
                <label htmlFor="password1">Password: </label>
                <input
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    id="password1"
                    name="password"
                    placeholder="Password"
                    minLength="6"
                />
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                <br />
                <label htmlFor="password2">Confirm password: </label>
                <input
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    id="password2"
                    name="password2"
                    placeholder="Confirm Password"
                    minLength="6"
                />
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                <br />
                <button type="submit">
                    Submit
                </button>
                <p>Minimum password requirements: {score}/5 </p>
                <ul>

                    {long8 ? <li style={{ color: "green", listStyleType: "\u{1F5F9}" }} >6 characters long</li> : <li>6 characters long</li>}
                    {upper ? <li style={{ color: "green", listStyleType: "\u{1F5F9}" }} >1 upper-case letter</li> : <li>1 upper-case letter</li>}
                    {lower ? <li style={{ color: "green", listStyleType: "\u{1F5F9}" }} >1 lower-case letter</li> : <li>1 lower-case letter</li> }
                    {number ? <li style={{ color: "green", listStyleType: "\u{1F5F9}" }} >1 number</li> : <li>1 number</li>}
                    {spec ? <li style={{ color: "green", listStyleType: "\u{1F5F9}" }} >1 special character</li> : <li>1 special character</li>}
                </ul>

                {/* errrors block for display */}
                {/* {message ? <p style={{ color: '{color}' }}> {message} </p> : null} */}

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
