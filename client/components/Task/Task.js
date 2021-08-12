import React from "react";
import axios from "axios";
import { TaskList } from "./TaskList";

export const Task = () => {
  const [task, setTask] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://6113ed2bcba40600170c1d17.mockapi.io/api/v1/projects"
      );
      setTask(result.data);
    };
    fetchData();
  }, []);
  return (
    <section className="h-full w-full">
      <div>
        <div>
          <div className="text-3xl text-primary font-medium mb-5">
            Задачи
          </div>
          <div className="text-sm text-gray-dark">fasted quick tasks</div>
        </div>
        <div className="mt-4">
          <TaskList tasks={task} />
        </div>
      </div>
    </section>
  );
};
