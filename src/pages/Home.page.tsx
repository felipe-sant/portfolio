import { Link } from "react-router-dom";
import HeaderComponent from "../components/Header.component"
import HeaderMobileComponent from "../components/HeaderMobile.components";
import css from "../styles/pages/home.module.css"
import useWindowSize from "../utils/useWindowSize";
import profilePicture from "../assets/profile.jpeg"

function HomePage() {
    const { width } = useWindowSize();

    return <>
        {width >= 768 ? <HeaderComponent location="home" /> : <HeaderMobileComponent location="home" />}
        <main className={css.main}>
            <div className={css.about}>
                <div className={css.left}>
                    <h2>Olá, meu nome é Luiz Felipe</h2>
                    <p>Olá, meu nome é Luiz Felipe, mas pode me chamar de Felipe, atualmente sou um estudante de programação na Fatec de Jacareí no curso de DSM. Aqui neste portfolio você encontrara mais informações sobre mim.</p>
                    <Link to="/about" className={css.link + " link"}>Ver mais informações</Link>
                </div>
                <div className={css.right}>
                    <img src={profilePicture} alt="profile picture" />
                </div>
            </div>
        </main>
    </>
}

export default HomePage