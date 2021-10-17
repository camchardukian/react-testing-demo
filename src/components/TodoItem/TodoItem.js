const TodoItem = ({ todo }) => {
  const { id, title, isCompleted } = todo;
  const h1 = <h1>{title}</h1>;
  const text = isCompleted ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>;
};

export default TodoItem;
