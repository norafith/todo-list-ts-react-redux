import { useAppSelector } from "../../hooks/reactReduxTypedHooks";
import ProjectSection from "./ProjectSection";
import { getProjectList } from "./../../store/selectors/todo";

const ProjectSectionContainer: React.FC = (props) => {
  const projects = useAppSelector(getProjectList);

  return <ProjectSection projects={projects} />;
};

export default ProjectSectionContainer;
