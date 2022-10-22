export enum TestActionTypes {
  SET_MESSAGE = "test/SET_MESSAGE",
  UPDATE = "test/UPDATE"
}

export interface SetMessageAction {
  type: TestActionTypes.SET_MESSAGE,
  payload: string,
}

export interface UpdateAction {
  type: TestActionTypes.UPDATE,
}

export type TestAction = SetMessageAction | UpdateAction;

export interface TestState {
  message: string,
}
