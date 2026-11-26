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
function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/task" element={<Task />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/calander" element={<Calander/>} />
        <Route path="/settings" element={<Settings/>} />

      </Routes>
    </BrowserRouter>
  )
  
}
export default App;