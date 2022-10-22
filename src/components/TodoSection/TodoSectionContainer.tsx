import { useParams } from "react-router";
import { useAppSelector } from "../../hooks/reactReduxTypedHooks";
import { getTodoList } from "../../store/selectors/todo";
import TodoSection from "./TodoSection";

const TodoSectionContainer: React.FC = (props) => {
  const { currentProject } = useParams();
  const todos = useAppSelector(getTodoList(currentProject as string));

  if (currentProject === undefined) return <div>Error</div>;

  return <TodoSection todos={todos} />;
};

export default TodoSectionContainer;
