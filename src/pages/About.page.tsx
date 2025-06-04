import HeaderComponent from "../components/Header.component";
import HeaderMobileComponent from "../components/HeaderMobile.components";
import useWindowSize from "../utils/useWindowSize";

function AboutPage() {
    const { width } = useWindowSize();

    return <>
        {width >= 768 ? <HeaderComponent location="about" /> : <HeaderMobileComponent location="about" />}
        <main>
            <h1>About Me</h1>
        </main>
    </>
}

export default AboutPage;