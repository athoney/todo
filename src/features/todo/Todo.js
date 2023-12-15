import React, { useEffect } from "react";
import '../../components/styles.css';
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList, deleteTodo, toggleComplete } from "./todoSlice";

export default function Todo({ color, desc, completed, id }) {
    const dispatch = useDispatch();


    useEffect(() => {
        const opacity = completed ? '0.4' : '1';
        document.getElementById(id).style.opacity = opacity;
        console.log(completed)
    }, [completed]);

    function handleDelete() {
        dispatch(deleteTodo(id));
    }

    function handleComplete() {
        dispatch(toggleComplete(id));
    }

    return (
        <div className="todo" style={{ backgroundColor: color}} id={id}>
            <div className="todo-options">
                <span onClick={handleDelete} className="badge rounded-pill bg-danger me-1">
                    <i className="bi bi-trash-fill"></i>
                </span>

                <span onClick={handleComplete} className="badge rounded-pill bg-success">
                    <i className="bi bi-check"></i>
                </span>
            </div>
            <p className="mt-1 text-start">{desc}</p>

        </div>
    );
}