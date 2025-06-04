import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home.page';
import NotFoundPage from '../pages/NotFound.page';
import About from '../pages/About';
import ProjectsAll from '../pages/ProjectsAll';

function Routers() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<ProjectsAll />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    )
}

export default Routers