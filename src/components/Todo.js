import React from "react";
import './styles.css';

export default function Todo({color}) {

    return (
        <div className="todo" style={{backgroundColor: color}}>
            <p>Water the plants</p>
        </div>
    );
}