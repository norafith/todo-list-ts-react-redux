import { SetMessageAction, TestActionTypes } from "../../types/test"

export const setMessage = (messageText: string): SetMessageAction  => {
  return {
    type: TestActionTypes.SET_MESSAGE,
    payload: messageText,
  }
}