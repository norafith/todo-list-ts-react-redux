import React from "react";
import { Route, Routes } from "react-router";
import styles from "./App.module.scss";
import ProjectSectionContainer from "./ProjectSection/ProjectSectionContainer";
import TodoSectionContainer from "./TodoSection/TodoSectionContainer";

const App: React.FC = (props) => {
  return (
    <div className={styles.app}>
      <ProjectSectionContainer />
      <Routes>
        <Route
          path=":currentProject"
          element={<TodoSectionContainer />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
