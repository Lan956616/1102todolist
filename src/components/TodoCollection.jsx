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
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={(id) => onToggleDone?.(id)}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
