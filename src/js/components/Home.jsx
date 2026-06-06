import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            setTasks([...tasks, e.target.value]);
            e.target.value = "";
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>todos</h1>

            <ul className="list-group shadow">
                <li className="list-group-item">
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        onKeyDown={addTask}
                        className="form-control border-0"
                    />
                </li>

                {tasks.length === 0 ? (
                    <li className="list-group-item text-muted">
                        No hay tareas, añadir tareas
                    </li>
                ) : (
                    tasks.map((task, index) => (
                        <li
                            key={index}
                            className="list-group-item task-item"
                        >
                            {task}
                            <span
                                className="delete-btn"
                                onClick={() => deleteTask(index)}
                            >
                                ×
                            </span>
                        </li>
                    ))
                )}

                <li className="list-group-item text-muted">
                    {tasks.length} item{tasks.length !== 1 ? "s" : ""} left
                </li>
            </ul>
        </div>
    );
};

export default Home;