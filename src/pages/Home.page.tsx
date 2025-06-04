import HeaderComponent from "../components/Header.component"
import HeaderMobileComponent from "../components/HeaderMobile.components";
import css from "../styles/pages/home.module.css"
import useWindowSize from "../utils/useWindowSize";

function HomePage() {
    const { width } = useWindowSize();

    return <>
        {width >= 768 ? <HeaderComponent location="home" /> : <HeaderMobileComponent location="home" />}
        <main className={css.main}>
            <h1>Hello world</h1>
        </main>
    </>
}

export default HomePage