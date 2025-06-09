import css from "../styles/components/tag.module.css"
import TagDatabaseType from "../types/tags/TagDatabase.type"
import TagFrameworkType from "../types/tags/TagFramework.type"
import TagLanguageType from "../types/tags/TagLanguage.type"
import TagModelType from "../types/tags/TagModel.type"
import TagScopeType from "../types/tags/TagScope.type"
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter"

function TagComponent(props: { tag: TagDatabaseType | TagFrameworkType | TagLanguageType | TagModelType | TagScopeType }) {
    const tag = props.tag
    const text = capitalizeFirstLetter(tag)

    return (
        <div className={css.tag + " " + css[tag]}>{text}</div>
    )
}

export default TagComponent