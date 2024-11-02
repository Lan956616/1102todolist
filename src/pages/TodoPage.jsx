import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useEffect, useState } from 'react';
import { getTodos, createTodo, patchTodo, deleteTodo } from 'api/todos';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

// const dummyTodos = [
//   {
//     title: 'Learn to create custom hooks',
//     isDone: false,
//     id: 2,
//     isDelete: false,
//   },
// ];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated, currentMember } = useAuth();

  function handleChange(value) {
    setInputValue(value);
  }

  const handleAddTodo = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({ title: inputValue, isDone: false });
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isDelete: false,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleDone = async (id) => {
    const currentTodo = todos.find((todo) => {
      return todo.id === id;
    });
    try {
      await patchTodo({
        id,
        isDone: !currentTodo.isDone,
      });
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return todo;
          }
        }),
      );
    } catch (err) {
      console.error(err);
    }
  };

  function handleItemChange({ id, isEdit }) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEdit: isEdit };
        } else {
          return { ...todo, isEdit: false };
        }
      }),
    );
  }

  const handleOnSave = async (id, inputRef) => {
    try {
      await patchTodo({ id, title: inputRef });
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title: inputRef, isEdit: false };
          } else {
            return todo;
          }
        }),
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      const newTodo = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDelete: true };
        } else {
          return todo;
        }
      });
      setTodos(newTodo);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log('ue');
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos();
        console.log('uetodos', todos);
        const newtd = todos.map((todo) => {
          return { ...todo, isEdit: false, isDelete: false };
        });
        console.log('newtd', newtd);

        setTodos(newtd);
      } catch (error) {
        console.log(error);
      }
    };
    getTodosAsync();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      TodoPage
      <Header username={currentMember?.name} />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDone={handleAddTodo}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleItemChange}
        onSave={handleOnSave}
        onDelete={handleDelete}
      />
      <Footer todos={todos} />
    </div>
  );
};

export default TodoPage;
