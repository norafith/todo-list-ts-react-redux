import Project from "./Project";
import { useState } from "react";
import { useAppDispatch } from "./../../../../hooks/reactReduxTypedHooks";
import { deleteProject as deleteProjectAC } from "../../../../store/actionCreators/todo";

interface ProjectContainerProps {
  projectName: string;
}

const ProjectContainer: React.FC<ProjectContainerProps> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();

  const deleteProject = (projectName: string) =>
    dispatch(deleteProjectAC(projectName));

  return (
    <Project
      deleteProject={deleteProject}
      projectName={props.projectName}
      editMode={editMode}
      setEditMode={setEditMode}
    />
  );
};

export default ProjectContainer;
