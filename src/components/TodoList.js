import React from 'react';
import './styles.css';
import Todo from '../features/todo/Todo';
import { useSelector } from 'react-redux';
import { selectTodoList } from '../features/todo/todoSlice';

export default function TodoList() {
    const todoList = useSelector(selectTodoList);


    return (
        <div className="todo-list">
            <div className="row row-cols-3 row-cols-xl-5">
                {todoList.map((todo) => (
                    <div className="col" key={todo.id}>
                        <Todo color={todo.color} desc={todo.desc} completed={todo.completed} id={todo.id}/>
                    </div>
                ))}
                {
                    todoList.length === 0 && <p className="text-center mx-auto">Nothing to do yet</p>  
                }
            </div>
        </div>
    );
}