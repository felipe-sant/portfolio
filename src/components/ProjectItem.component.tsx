import ProjectItemProps from "../types/props/ProjectItem.props"
import css from "../styles/components/projectItem.module.css"
import TagComponent from "./Tag.component"
import github from "../assets/github.svg"
import global from "../assets/global.svg"
import { redirectToUrl } from "../utils/redirectUrl"

function ProjectItemComponent(props: { project: ProjectItemProps }) {
    const { img, description, linkGit, name, tagLanguage, tagModel, tagScope, tags, linkProj } = props.project

    return (
        <div className={css.content}>
            <div className={css.left}>
                <img src={img} alt="project" />
                <div className={css.tags}>
                    <div>{tagLanguage.map((tag, index) => <TagComponent tag={tag} key={index} />)}</div>
                    <div className={css.line} />
                    <div>{tags.map((tag, index) => <TagComponent tag={tag} key={index} />)}</div>
                </div>
            </div>
            <div className={css.right}>
                <div className={css.title}>
                    <h2 className={css[tagScope]}>{name}</h2>
                    <TagComponent tag={tagModel} />
                </div>
                <div className={css.text}>
                    <p>{description}</p>
                </div>
                <div className={css.buttons}>
                    {linkProj &&
                        <button className={css.proj} onClick={() => redirectToUrl(linkGit)}>
                            <img src={global} alt="external" />
                            <span>Ver projeto</span>
                        </button>
                    }
                    <button className={css.github} onClick={() => redirectToUrl(linkGit)}>
                        <img src={github} alt="github" />
                        <span>Ver código</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItemComponent