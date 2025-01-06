'use client';

import React, { useState } from 'react';

type TodoFormProps = {
  addTodo: (todo: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="新しいTodoを入力"
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn">
        追加
      </button>
    </form>
  );
};

export default TodoForm;
