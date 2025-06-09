import HeaderComponent from "../components/Header.component";
import HeaderMobileComponent from "../components/HeaderMobile.components";
import useWindowSize from "../utils/useWindowSize";
import css from "../styles/pages/projectAll.module.css"
import TagComponent from "../components/Tag.component";

function ProjectsAllPage() {
    const { width } = useWindowSize();

    return <>
        {width >= 768 ? <HeaderComponent location="project" /> : <HeaderMobileComponent location="project" />}
        <main className={width >= 768 ? css.main : css.main + " " + css.mainBlack}>
            <div className={css.projects}>
                <TagComponent tag="typescript" />
            </div>
        </main>
    </>
}

export default ProjectsAllPage;