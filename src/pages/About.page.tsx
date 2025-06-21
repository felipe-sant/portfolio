import HeaderComponent from "../components/Header.component";
import HeaderMobileComponent from "../components/HeaderMobile.components";
import useWindowSize from "../utils/useWindowSize";
import css from "../styles/pages/about.module.css"
import profile from "../assets/about.jpeg"
import FooterComponent from "../components/Footer.component";
import allExperience from "../data/allExperiences";
import allFormations from "../data/allFormations";
import InformationComponent from "../components/Information.component";

function AboutPage() {
    const { width } = useWindowSize();
    const formations = allFormations
    const experiences = allExperience

    return <>
        {width >= 768 ? <HeaderComponent location="about" /> : <HeaderMobileComponent location="about" />}
        <main className={width >= 768 ? css.main : css.main + " " + css.mainBlack}>
            <div className={css.about}>
                <div className={css.left}>
                    <img src={profile} alt="profile" />
                </div>
                <div className={css.right}>
                    <h2>Mais sobre mim</h2>
                    <p>Sou um estudante de Tecnologia da Informação na Fatec de Jacareí, com experiência em manipulação de dados, programação orientada a objetos, versionamento de código e práticas com metodologias ágeis. Em busca de oportunidades na área de análise de dados e desenvolvimento de software.</p>
                </div>
            </div>
            <hr />
            <div className={css.formations}>
                <h2>Formações</h2>
                <div className={css.list}>
                    {formations.map((formation, index) => <InformationComponent information={formation} key={index} />)}
                </div>
            </div>
            <hr />
            <div className={css.experience}>
                <h2>Experiências Profissionais</h2>
                <div className={css.list}>
                    {experiences.map((formation, index) => <InformationComponent information={formation} key={index} />)}
                </div>
            </div>
        </main>
        <FooterComponent />
    </>
}

export default AboutPage;