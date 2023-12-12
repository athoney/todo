import React from "react";
import "./styles.css";

export default function NewTodo() {
    return (
        <div className="new-todo">
            <h3>New Todo</h3>
            <div class="mb-2">
                <input type="email" class="form-control w-75 mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <button type="button" class="btn btn-dark">Add</button>
        </div>
    );
}