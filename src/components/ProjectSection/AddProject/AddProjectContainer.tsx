import { useState } from "react";
import AddProject from "./AddProject";
import { useAppDispatch } from "./../../../hooks/reactReduxTypedHooks";
import { addProject } from "../../../store/actionCreators/todo";

interface AddProjectContainerProps {
  projects: Array<string>;
}

const AddProjectContainer: React.FC<AddProjectContainerProps> = (props) => {
  const dispatch = useAppDispatch();
  const [newProjectName, setNewProjectName] = useState("");

  const addNewProject = () => {
    if (props.projects.includes(newProjectName)) {
      alert("Project with same name already exists.");
      return;
    }
    dispatch(addProject(newProjectName));
  };
  return (
    <AddProject
      addNewProject={addNewProject}
      setNewProjectName={setNewProjectName}
      newProjectName={newProjectName}
    />
  );
};

export default AddProjectContainer;
