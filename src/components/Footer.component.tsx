import css from "../styles/components/footer.module.css"
import gato from "../assets/gato.svg"
import github from "../assets/github.svg"
import email from "../assets/email.svg"

function FooterComponent() {
    return (
        <footer className={css.footer}>
            <div className={css.left}>
                <div className={css.logo}>
                    <img src={gato} alt="logo" />
                </div>
                <div className={css.information}>
                    <h1>Informações</h1>
                    <div className={css.contact}>
                        <img src={github} alt="" />
                        <p>@felipe-sant</p>
                    </div>
                    <div className={css.contact}>
                        <img src={email} alt="" />
                        <p>contact.felipesant@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={css.line} />
            <div className={css.copyright}>
                <p>Site desenvolvido como portfolio pessoal do aluno Luiz Felipe dos Santos da Fatec de Jacareí</p>
            </div>
        </footer>
    )
}

export default FooterComponent