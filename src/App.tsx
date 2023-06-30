import { Routes, Route } from 'react-router-dom'
import About from './pages/AboutPage'
import Projects from './pages/ProjectsPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}
export default App