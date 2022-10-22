export type TodoState = Record<string, Array<Todo>>;

export enum TodoActionTypes {
  CREATE_TODO = "todo/CREATE_TODO",
  DELETE_TODO = "todo/DELETE_TODO",
  CHANGE_TODO_INFO = "todo/CHANGE_TODO_INFO",
  CHANGE_TODO_COMPLETION = "todo/CHANGE_TODO_COMPLETION",

  ADD_PROJECT = "todo/CREATE_PROJECT",
  DELETE_PROJECT = "todo/DELETE_PROJECT",
  CHANGE_PROJECT_NAME = "todo/CHANGE_PROJECT_NAME",
  DUMB_ACTION = "todo/DUMB",
}

export type TodoAction =
  | CreateTodoAction
  | DeleteTodoAction
  | ChangeTodoInfoAction
  | ChangeTodoCompletionAction
  | AddProjectAction
  | DeleteProjectAction
  | ChangeProjectNameAction
  | DumbTodoAction;

interface DumbTodoAction {
  type: TodoActionTypes.DUMB_ACTION;
  payload?: any;
}

export interface CreateTodoAction {
  type: TodoActionTypes.CREATE_TODO;
  payload: {
    projectName: string;
    todoName: string;
    completeBy?: Date;
    description?: string;
  };
}

export interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: {
    projectName: string;
    todoName: string;
  };
}

export interface ChangeTodoInfoAction {
  type: TodoActionTypes.CHANGE_TODO_INFO;
  payload: {
    projectName: string;
    todoName: string;
    description?: string;
    completeBy?: Date;
  };
}

export interface ChangeTodoCompletionAction {
  type: TodoActionTypes.CHANGE_TODO_COMPLETION;
  payload: {
    projectName: string;
    todoName: string;
  };
}

export interface AddProjectAction {
  type: TodoActionTypes.ADD_PROJECT;
  payload: {
    projectName: string;
  };
}

export interface DeleteProjectAction {
  type: TodoActionTypes.DELETE_PROJECT;
  payload: {
    projectName: string;
  };
}

export interface ChangeProjectNameAction {
  type: TodoActionTypes.CHANGE_PROJECT_NAME;
  payload: {
    projectName: string;
    newProjectName: string;
  };
}

export interface Todo {
  completed: boolean;
  name: string;
  description?: string;
  date: {
    createdAt: Date;
    completeBy?: Date;
  };
}
