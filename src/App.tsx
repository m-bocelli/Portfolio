import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<AboutPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
    </Routes>
  )
}