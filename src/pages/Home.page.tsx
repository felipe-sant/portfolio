import HeaderComponent from "../components/Header.component"
import css from "../styles/pages/home.module.css"

function HomePage() {
    return (
        <main className={css.main}>
            <HeaderComponent />
            <h1>Hello world</h1>
        </main>
    )
}

export default HomePage