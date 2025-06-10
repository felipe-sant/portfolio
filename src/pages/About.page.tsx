import HeaderComponent from "../components/Header.component";
import HeaderMobileComponent from "../components/HeaderMobile.components";
import useWindowSize from "../utils/useWindowSize";
import css from "../styles/pages/about.module.css"

function AboutPage() {
    const { width } = useWindowSize();

    return <>
        {width >= 768 ? <HeaderComponent location="about" /> : <HeaderMobileComponent location="about" />}
        <main className={width >= 768 ? css.main : css.main + " " + css.mainBlack}>
            <div className={css.about}>
                <h1>About Me</h1>
            </div>
        </main>
    </>
}

export default AboutPage;