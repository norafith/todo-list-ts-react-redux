import Todo, { TodoProps } from "./Todo";

const TodoContainer: React.FC<TodoProps> = (props) => {
  return <Todo {...props} />;
};

export default TodoContainer;
