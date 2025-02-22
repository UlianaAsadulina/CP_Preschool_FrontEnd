import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProgrammsPage from './pages/ProgrammsPage'
import SchedulePage from './pages/SchedulePage'
import ContactsPage from './pages/ContactsPage'
import AdminPage from './pages/AdminPage'
import './App.css'

export default function App() { 

  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/programms' element={<ProgrammsPage />} />
        <Route path='/schedule' element={<SchedulePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='*' element={ <h1>404: Page Not Found</h1> } />
      </Routes>
    </>
  )
};


