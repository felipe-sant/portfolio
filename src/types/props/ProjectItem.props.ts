import TagDatabaseType from "../tags/TagDatabase.type"
import TagFrameworkType from "../tags/TagFramework.type"
import TagLanguageType from "../tags/TagLanguage.type"
import TagModelType from "../tags/TagModel.type"
import TagScopeType from "../tags/TagScope.type"

type ProjectItemProps = {
    img: string,
    name: string,
    description: string,
    tags: TagDatabaseType[] | TagFrameworkType[]
    tagModel: TagModelType,
    tagScope: TagScopeType,
    tagLanguage: TagLanguageType[]
    linkGit: string,
    linkProj?: string,
}

export default ProjectItemProps