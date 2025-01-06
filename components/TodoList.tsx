'use client';

import React from 'react';

type TodoListProps = {
  todos: string[];
  removeTodo: (index: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          <span className="todo-text">{todo}</span>
          <button onClick={() => removeTodo(index)} className="todo-delete-btn">
            削除
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
