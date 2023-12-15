import React, {useState} from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addTodo, deleteAll } from "../features/todo/todoSlice";
import { v4 as uuidv4 } from "uuid";

export default function NewTodo() {
    const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow'];
    const dispatch = useDispatch();

    const [desc, setDesc] = useState('');

    function handleDelete() {
        dispatch(deleteAll());
    }

    function handleChange(e) {
        setDesc(e.target.value);
    }

    function handleAdd(e) {
        e.preventDefault();
        if (desc === '') {
            return;
        }
        dispatch(addTodo({
            desc: desc,
            color: colors[Math.floor(Math.random() * colors.length)],
            completed: false,
            id: uuidv4()
        }));
        setDesc('');
    }

    return (
        <div className="new-todo">
            <h3>New Todo</h3>
            <form onSubmit={handleAdd} autocomplete="off">
            <div className="mb-2">
                <input type="text" className="form-control w-75 mx-auto" onChange={handleChange} value={desc}/>
            </div>
                <button type="submit" className="btn btn-dark">Add</button>
                <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>Clear All</button>

            </form>
        </div>
    );
}