import { Routes, Route } from 'react-router-dom';
import {
    Layout,
    Home,
    Projects,
    Models,
    ErrorPage,
    Resume,
    Blog,
} from './pages';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/models' element={<Models />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    );
}
