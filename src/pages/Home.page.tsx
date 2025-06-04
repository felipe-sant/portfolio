import HeaderComponent from "../components/Header.component"
import css from "../styles/pages/home.module.css"

function HomePage() {
    return <>
        <HeaderComponent location="home" />
        <main className={css.main}>
            <h1>Hello world</h1>
        </main>
    </>
}

export default HomePage