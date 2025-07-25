import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth_context';

export default function ProtectedRoutes() {
    const { cookies } = useAuth();

    return cookies.token ? <Outlet /> : <h1>You are not Authorized to View</h1>;
}