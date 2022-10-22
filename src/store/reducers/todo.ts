import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";
import { Todo as TodoInterface } from "./../../types/todo";

class Todo implements TodoInterface {
  date: {
    completeBy?: Date;
    createdAt: Date;
  };
  completed: boolean = false;
  constructor(
    public name: string,
    public description?: string,
    completeBy?: Date
  ) {
    this.date = {
      createdAt: new Date(),
    };
    if (completeBy) this.date.completeBy = completeBy;
  }
}

export const todoReducer = (
  state: TodoState = {},
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.CREATE_TODO: {
      const stateCopy = { ...state };
      const { todoName, description, completeBy, projectName } = {
        ...action.payload,
      };
      stateCopy[projectName] = [
        ...stateCopy[projectName],
        new Todo(todoName, description, completeBy),
      ];
      return stateCopy;
    }

    case TodoActionTypes.DELETE_TODO: {
      const stateCopy = { ...state };
      const { projectName, todoName } = { ...action.payload };
      stateCopy[projectName] = stateCopy[projectName].filter(
        (value) => value.name !== todoName
      );
      return stateCopy;
    }

    case TodoActionTypes.CHANGE_TODO_COMPLETION: {
      const stateCopy = { ...state };
      const { projectName, todoName } = { ...action.payload };
      let project = stateCopy[projectName];
      project = [...project];
      for (let i = 0; i < project.length; i++) {
        let todo = project[i];
        if (todo.name === todoName) {
          todo = { ...todo };
          todo.completed = !todo.completed;
          break;
        }
      }
      return stateCopy;
    }

    case TodoActionTypes.CHANGE_TODO_INFO: {
      const stateCopy = { ...state };
      const { completeBy, description, projectName, todoName } = {
        ...action.payload,
      };
      let project = stateCopy[projectName];
      project = [...project];
      for (let i = 0; i < project.length; i++) {
        let todo = project[i];
        if (todo.name === todoName) {
          if (completeBy) {
            todo.date = { ...todo.date };
            todo.date.completeBy = completeBy;
          }
          if (description) {
            todo.description = description;
          }
          break;
        }
      }
      return stateCopy;
    }

    case TodoActionTypes.ADD_PROJECT: {
      const { projectName } = { ...action.payload };
      return {
        ...state,
        [projectName]: [],
      };
    }

    case TodoActionTypes.CHANGE_PROJECT_NAME: {
      const stateCopy = { ...state };
      const { newProjectName, projectName } = { ...action.payload };
      stateCopy[newProjectName] = { ...stateCopy[projectName] };
      delete stateCopy[projectName];
      return stateCopy;
    }

    case TodoActionTypes.DELETE_PROJECT: {
      const stateCopy = { ...state };
      const { projectName } = { ...action.payload };
      delete stateCopy[projectName];
      return stateCopy;
    }

    default:
      return state;
  }
};
