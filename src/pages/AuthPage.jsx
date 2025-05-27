import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUp from '../components/SignupForm';

const Auth = () => {
    const [newUser, setNewUser] = useState(false);
    return (
        <>
            {newUser ? (
                <SignUp setNewUser={setNewUser} />
            ) : (
                <LoginForm setNewUser={setNewUser} />
            )}
        </>
    );
};

export default Auth;