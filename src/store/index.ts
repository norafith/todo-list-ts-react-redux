import { configureStore } from "@reduxjs/toolkit";
import { getPreloadedState, updateLocalStorage } from "./localStorage";
import thunk from "redux-thunk";
import { todoReducer as todo } from "./reducers/todo";

const preloadedState = getPreloadedState();
const store = configureStore({
  reducer: { todo },
  middleware: [thunk],
  preloadedState,
});

store.subscribe(() => updateLocalStorage(store.getState()));

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
