import AddProjectContainer from "./AddProject/AddProjectContainer";
import ProjectList from "./ProjectList/ProjectList";

interface ProjectSectionProps {
  projects: Array<string>;
}

const ProjectSection: React.FC<ProjectSectionProps> = (props) => {
  return (
    <section>
      <AddProjectContainer projects={props.projects} />
      <ProjectList projects={props.projects} />
    </section>
  );
};

export default ProjectSection;
