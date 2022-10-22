import { Todo as TodoType } from "../../types/todo";
import Todo from "./Todo/Todo";

interface TodoSectionProps {
  todos: Array<TodoType>;
}

const TodoSection: React.FC<TodoSectionProps> = (props) => {
  if (!props.todos) return <section>No such project</section>;

  const todos = props.todos.map((todo) => (
    <Todo completed={todo.completed} name={todo.name} date={todo.date} />
  ));
  return <section>{todos}</section>;
};

export default TodoSection;
