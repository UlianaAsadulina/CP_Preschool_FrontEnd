import { useAuth } from '../context/auth_context';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const LoginForm = ({ setNewUser }) => {
    const nav = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState([]);

    const handleClick = () => {
        setNewUser(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(formData);
            nav('/dashboard');
            console.log('Success');

        } catch (err) {
            let newArr = err.response.data.errors;
            // window.alert(newArr);
            setErrors(newArr);
            setTimeout(() => {
                setErrors([]);
            }, 3000);

        }


    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, });
    };

    return (
        <div className='forms'>
            <h2>Login</h2>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email: </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                />
                <label htmlFor='password'>Password: </label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleChange}
                    minLength='6'
                />
                <button type='submit'>Log In</button>
                {errors.length > 0 ? errors.map((e, index) => (
                    <p key={index} className="redtext"> {e.msg} </p>)) : null}
            </form>
            <p>
                Dont have an account? <button onClick={handleClick}>Sign Up</button>
            </p>
        </div>
    );
};

export default LoginForm;