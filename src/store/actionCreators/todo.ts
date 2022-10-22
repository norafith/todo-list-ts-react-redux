import {
  AddProjectAction,
  ChangeProjectNameAction,
  ChangeTodoInfoAction,
  CreateTodoAction,
  TodoActionTypes,
  DeleteTodoAction,
  ChangeTodoCompletionAction,
  DeleteProjectAction,
} from "../../types/todo";

export const createTodo = (
  projectName: string,
  todoName: string,
  completeBy?: Date,
  description?: string
): CreateTodoAction => {
  return {
    type: TodoActionTypes.CREATE_TODO,
    payload: { projectName, todoName, completeBy, description },
  };
};

export const deleteTodo = (
  projectName: string,
  todoName: string
): DeleteTodoAction => {
  return {
    type: TodoActionTypes.DELETE_TODO,
    payload: { projectName, todoName },
  };
};

export const changeTodoCompletion = (
  projectName: string,
  todoName: string
): ChangeTodoCompletionAction => {
  return {
    type: TodoActionTypes.CHANGE_TODO_COMPLETION,
    payload: { projectName, todoName },
  };
};

export const changeTodoInfo = (
  projectName: string,
  todoName: string,
  completeBy: Date,
  description: string
): ChangeTodoInfoAction => {
  return {
    type: TodoActionTypes.CHANGE_TODO_INFO,
    payload: { projectName, todoName, completeBy, description },
  };
};

export const addProject = (projectName: string): AddProjectAction => {
  return {
    type: TodoActionTypes.ADD_PROJECT,
    payload: { projectName },
  };
};

export const changeProjectName = (
  projectName: string,
  newProjectName: string
): ChangeProjectNameAction => {
  return {
    type: TodoActionTypes.CHANGE_PROJECT_NAME,
    payload: { projectName, newProjectName },
  };
};

export const deleteProject = (projectName: string): DeleteProjectAction => {
  return {
    type: TodoActionTypes.DELETE_PROJECT,
    payload: { projectName },
  };
};
