import HeaderComponent from "../components/Header.component";
import HeaderMobileComponent from "../components/HeaderMobile.components";
import useWindowSize from "../utils/useWindowSize";

function ProjectsAllPage() {
    const { width } = useWindowSize();

    return <>
        {width >= 768 ? <HeaderComponent location="project" /> : <HeaderMobileComponent location="project" />}
        <main>
            <h1>Projects</h1>
        </main>
    </>
}

export default ProjectsAllPage;