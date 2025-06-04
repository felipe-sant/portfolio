import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home.page';
import NotFoundPage from '../pages/NotFound.page';
import AboutPage from '../pages/About.page';
import ProjectsAllPage from '../pages/ProjectsAll.page';

function Routers() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/project" element={<ProjectsAllPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    )
}

export default Routers