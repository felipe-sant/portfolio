import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home.page';
import NotFoundPage from '../pages/NotFound.page';

function Routers() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    )
}

export default Routers