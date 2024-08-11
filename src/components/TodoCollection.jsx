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
            onToggleDone={(id) => onToggleDone(id)}
            onChangeMode={({ id, isEdit }) => {
              onChangeMode?.({ id, isEdit });
            }}
            onSave={(id, inputRef) => {
              onSave?.(id, inputRef);
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
