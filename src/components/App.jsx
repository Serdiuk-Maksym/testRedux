import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todoSlice';
import TodoList from './TodoList/TodoList';
import NewTodoForm from './InputField/InputField';
import {} from './App.css';

export function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}
