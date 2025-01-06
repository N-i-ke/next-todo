'use client';

import React, { useState } from 'react';

const TodoPage = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <h1 className="app-title">Todoアプリ</h1>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const newTodo = formData.get('todo') as string;
          if (newTodo.trim()) {
            addTodo(newTodo);
            e.currentTarget.reset();
          }
        }}
      >
        <input type="text" name="todo" className="todo-input" placeholder="新しいタスクを追加" />
        <button type="submit" className="todo-add-btn">
          追加
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{todo}</span>
            <button className="todo-delete-btn" onClick={() => removeTodo(index)}>
              削除
            </button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .todo-app {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .app-title {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }

        .todo-form {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .todo-input {
          flex: 1;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .todo-add-btn {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .todo-add-btn:hover {
          background-color: #0056b3;
        }

        .todo-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .todo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 10px;
          transition: box-shadow 0.3s ease;
        }

        .todo-item:hover {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .todo-text {
          flex: 1;
          margin-right: 10px;
          color: #333;
        }

        .todo-delete-btn {
          background-color: #f44336;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .todo-delete-btn:hover {
          background-color: #d32f2f;
        }
      `}</style>
    </div>
  );
};

export default TodoPage;
