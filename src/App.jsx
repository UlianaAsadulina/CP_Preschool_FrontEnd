import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProgrammsPage from './pages/ProgrammsPage';
import SchedulePage from './pages/SchedulePage';
import ContactsPage from './pages/ContactsPage';
import AdminPage from './pages/AdminPage';
import EditGroupPage from './pages/EditGroupPage';
import './App.css';
import NavBar from './components/NavBar';
import TuitionPage from './pages/TuitionPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';


export default function App() { 

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/programms' element={<ProgrammsPage />} />
        <Route path='/schedule' element={<SchedulePage />} />
        <Route path='/tuition' element={<TuitionPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/admin/update/:id' element={<EditGroupPage />} />
        </Route>       
        <Route path='*' element={ <h1>404: Page Not Found</h1> } />
      </Routes>
    </>
  )
};


