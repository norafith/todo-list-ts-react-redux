import { Dispatch, MouseEventHandler, SetStateAction, FocusEvent } from "react";
import { NavLink } from "react-router-dom";

interface ProjectProps {
  projectName: string;
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  deleteProject: (projectName: string) => void;
}

const Project: React.FC<ProjectProps> = (props) => {
  const handleTurnOnEditMode: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    props.setEditMode(true);
  };

  const handleTurnOffEditMode = (event: FocusEvent<HTMLInputElement>) => {
    props.setEditMode(false);
  };

  const handleDeleteProject: MouseEventHandler<HTMLButtonElement> = (event) => {
    props.deleteProject(props.projectName);
  };

  return props.editMode ? (
    <li>
      <input type="text" onBlur={handleTurnOffEditMode} autoFocus />
    </li>
  ) : (
    <li>
      <NavLink to={props.projectName} replace>
        {props.projectName}
      </NavLink>
      <button onClick={handleTurnOnEditMode}>Edit</button>
      <button onClick={handleDeleteProject}>Delete</button>
    </li>
  );
};

export default Project;
