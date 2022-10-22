import { State } from "./index";

const STATE_KEY = "reduxState";

export const getPreloadedState = (): {} | any => {
  const localStorageState = localStorage.getItem(STATE_KEY);
  let preloadedState = {};
  if (localStorageState) {
    preloadedState = JSON.parse(localStorageState);
  }
  return preloadedState;
}

export const updateLocalStorage = (newState: State): void => {
  localStorage.setItem(STATE_KEY, JSON.stringify(newState));
}