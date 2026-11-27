
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './page/login'
import Project from './page/project'
import Task from './page/task'
import Team from './page/team'
import Clients from './page/clients'
import Dashboard from './page/dashboard'
import Calander from './page/calander'
import Settings from './page/settings'
import Register from './page/register'
import AdminLayout from './page/admin/adminlayout'
import AdminDashboard from './page/admin/dashboard'
import Userdetails from './page/admin/userdetails'
import AdminSettings from './page/admin/settings'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/task" element={<Task />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calander" element={<Calander />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="userdetails" element={<Userdetails />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
