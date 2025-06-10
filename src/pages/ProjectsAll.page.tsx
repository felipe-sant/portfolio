import HeaderComponent from "../components/Header.component";
import HeaderMobileComponent from "../components/HeaderMobile.components";
import useWindowSize from "../utils/useWindowSize";
import css from "../styles/pages/projectAll.module.css"
import allProjects from "../data/allProjects";
import ProjectItemComponent from "../components/ProjectItem.component";
import FooterComponent from "../components/Footer.component";

function ProjectsAllPage() {
    const { width } = useWindowSize();
    const projects = allProjects

    return <>
        {width >= 768 ? <HeaderComponent location="project" /> : <HeaderMobileComponent location="project" />}
        <main className={width >= 768 ? css.main : css.main + " " + css.mainBlack}>
            <div className={css.projects}>
                {projects.map((project, index) => <ProjectItemComponent project={project} key={index} />)}
            </div>
        </main>
        <FooterComponent />
    </>
}

export default ProjectsAllPage;