import React from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks }) => {
    const [task, setTask] = React.useState(tasks);
    const [newTask, setNewTask] = React.useState("");
    const addNew = (title) => {
        if (title === "") return;
        setTask([...task, { id: Date.now(), task: title, completed: false }]);
        setNewTask("");
    };
    return (
        <div>
            <div>
                {tasks.map((task) => {
                    <TaskItem title={task} />;
                })}
            </div>
            <input
                id="name"
                type="text"
                name="name"
                class="h-full w-full border-gray-300 px-2 transition-all outline-none text-gray-dark"
                placeholder="add task"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
            />
        </div>
    );
};
