import TodoItem from './TodoItem';

const TodoCollection = ({
  onSave,
  onDelete,
  onToggleDone,
  onChangeMode,
  todos,
}) => {
  return (
    <div>
      TodoCollection
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoCollection;
