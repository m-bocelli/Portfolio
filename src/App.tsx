import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Models from './pages/Models';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/models' element={<Models />} />
    </Routes>
  );
}
