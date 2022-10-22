import { TestAction, TestActionTypes, TestState } from "../../types/test";

let initialState: TestState = { message: "" };

const test = (state: TestState = initialState, action: TestAction): TestState => {
  switch (action.type) {
    case TestActionTypes.SET_MESSAGE:
      return { ...state, message: action.payload };
    case TestActionTypes.UPDATE:
      return {...state}
    default:
      return state;
  }
}

export default test;