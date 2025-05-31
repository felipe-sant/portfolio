import { Link } from "react-router-dom"
import css from "../styles/pages/notFound.module.css"

export default function NotFoundPage() {
    return (
        <main className={css.main}>
            <div>
                <h1 className={css.title}>404 - Not Found</h1>
                <p>
                    <Link to="/">Vá para a página inicial.</Link>
                </p>
            </div>
        </main>
    )
}
