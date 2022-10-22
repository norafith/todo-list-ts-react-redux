import { Todo as TodoType } from "./../../../types/todo";

export interface TodoProps extends TodoType {}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <article>
      <span>{props.name}</span>
      <span>{props.description}</span>
      <span>{String(props.date.createdAt)}</span>
    </article>
  );
};

export default Todo;
