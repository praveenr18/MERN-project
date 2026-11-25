import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './page/login'
import Project from './page/project'
import Task from './page/task'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App