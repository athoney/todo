import React from 'react';
import './styles.css';
import Todo from './Todo';

export default function TodoList() {
    return (
        <div className="todo-list">
            <div className="row row-cols-3">
                <div class="col">
                    <Todo color='lightgreen'/>
                </div>
                <div class="col">
                    <Todo color='lightgreen'/>
                </div>
                <div class="col">
                    <Todo color='lightgreen'/>
                </div>
                <div class="col">
                    <Todo color='lightgreen'/>
                </div>
            </div>
        </div>
    );
}