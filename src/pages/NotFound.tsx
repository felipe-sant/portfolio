import css from "../styles/pages/notFound.module.css"

export default function NotFound() {
    return (
        <main className={css.main}>
            <div>
                <h1 className={css.title}>404 - Not Found</h1>
                <p><a href="/">Vá para a página inicial.</a></p>
            </div>
        </main>
    )
}
