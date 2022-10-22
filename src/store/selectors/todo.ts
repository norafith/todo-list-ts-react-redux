import { State } from "../index";

export const getProjectList = (state: State): Array<string> => {
  return Object.keys(state.todo);
};

export const getTodoList = (projectName: string) => (state: State) => {
  return state.todo[projectName];
};
