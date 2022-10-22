import { Dispatch, SetStateAction } from "react";

interface AddProjectProps {
  setNewProjectName: Dispatch<SetStateAction<string>>;
  newProjectName: string;
  addNewProject: () => void;
}

const AddProject: React.FC<AddProjectProps> = (props) => {
  const handleInputNewProject = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setNewProjectName(event.target.value);
  };

  const handleCreateNewProject = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    props.addNewProject();
  };

  return (
    <div>
      <input
        type="text"
        value={props.newProjectName}
        onInput={handleInputNewProject}
      />
      <button onClick={handleCreateNewProject}>New project</button>
    </div>
  );
};

export default AddProject;
