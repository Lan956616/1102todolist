import TodoItem from './TodoItem';

const TodoCollection = ({
  onSave,
  onDelete,
  onToggleDone,
  onChangeMode,
  todos,
}) => {
  const reservedTodos = todos.filter((todo) => todo.isDelete === false);
  return (
    <div>
      {reservedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={(id) => onToggleDone(id)}
          onChangeMode={({ id, isEdit }) => {
            onChangeMode?.({ id, isEdit });
          }}
          onSave={(id, inputRef) => {
            onSave?.(id, inputRef);
          }}
          onDelete={(id) => {
            onDelete(id);
          }}
        />
      ))}
    </div>
  );
};

export default TodoCollection;
