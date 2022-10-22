import ProjectContainer from "./Project/ProjectContainer";

interface ProjectListProps {
  projects: Array<string>;
}

const ProjectList: React.FC<ProjectListProps> = (props) => {
  const projectsElements = props.projects.map((project) => (
    <ProjectContainer projectName={project} />
  ));
  return <ul>{projectsElements}</ul>;
};

export default ProjectList;
