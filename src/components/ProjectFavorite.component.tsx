import ProjectFavoriteProps from "../types/props/ProjectFavorites.props";
import css from "../styles/components/projectFavorite.module.css"
import { redirectToUrl } from "../utils/redirectUrl";
import github from "../assets/github.svg"
import global from "../assets/global.svg"

function ProjectFavoriteComponent(props: { project: ProjectFavoriteProps }) {
    const { name, description, img, linkGit, linkProj } = props.project
    return (
        <div className={css.content}>
            <div className={css.left}>
                <img src={img} alt="project" />
            </div>
            <div className={css.right}>
                <div className={css.title}>
                    <h2>{name}</h2>
                    <div className={css.buttons}>
                        {linkProj &&
                            <button className={css.proj} onClick={() => redirectToUrl(linkGit, '_blank')}>
                                <img src={global} alt="external" />
                                <span>Ver projeto</span>
                            </button>
                        }
                        <button className={css.github} onClick={() => redirectToUrl(linkGit, '_blank')}>
                            <img src={github} alt="github" />
                            <span>Ver código</span>
                        </button>
                    </div>
                </div>
                <div className={css.text}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectFavoriteComponent