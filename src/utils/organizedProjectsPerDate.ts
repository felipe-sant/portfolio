import ProjectItemProps from "../types/props/ProjectItem.props";

function organizedProjectPerDate(projects: ProjectItemProps[]): ProjectItemProps[] {
    return projects.sort((a, b) => {
        return b.lastUpdate.getTime() - a.lastUpdate.getTime();
    });
}

export default organizedProjectPerDate