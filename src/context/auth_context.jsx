import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";

import axios from "axios";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    // const navigate = useNavigate();

    // Function to handle login
    const login = async (formdata) => {
        try {
            console.log("From form:", formdata);
            let res = await axios({
                method: 'POST',
                url: 'https://thepreschool.onrender.com/auth',
                data: formdata,
            });

            console.log("Response: ", res.data);
            //Take token from response and set to cookies
            setCookie('token', res.data.token);
            // console.log(cookies.token);
            // navigate('/dashboard');
        } catch (err) {
            console.error(err);
            throw (err);
            //     let newArr = err.response.data.errors.map((e) => {return <p>{e.msg}</p>;});
            //     console.log(newArr);
            //     window.alert(newArr);
        }
    };

    //Register function
    async function signUp(formdata) {
        try {
            console.log(formdata)
            let res = await axios.post('https://thepreschool.onrender.com/users', formdata);

            setCookie('token', res.data.token);

        } catch (error) {
            console.error(error);

            // const err = new Error("Request failed");
            // err.response = { data: body }; // { errors: [...] }
            throw error;

            // let newArr = error.response.data.errors.map((e) => {
            //     return <p>{e.msg}</p>;
            // });
            // console.error(newArr);
            // window.alert(newArr);
        }
    };

    // Function to handle logout
    const logout = () => {
        ['token'].forEach((obj) => removeCookie(obj));

    };



    const value = useMemo(() => ({
        cookies,
        login,
        logout,
        signUp
    }), [cookies]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
        );
}

// Custom hook to use the AuthContext and do not import it every time
export function useAuth() {
    return useContext(AuthContext);
}